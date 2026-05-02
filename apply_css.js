const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'pages');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.css')) {
            processCss(fullPath);
        } else if (fullPath.endsWith('.html')) {
            processHtml(fullPath);
        }
    }
}

function processCss(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    content = content.replace(/:root\s*\{[^}]+\}/g, '');

    const colorMap = {
        '#eaff00': 'var(--c-primary)',
        '#f5b921': 'var(--c-primary)',
        '#e0a800': 'var(--c-primary-hover)',
        '#0b1121': 'var(--bg-header)',
        '#06050a': 'var(--bg-main)',
        '#0f172a': 'var(--bg-card)',
        '#1e293b': 'var(--bg-input)',
        '#111111': 'var(--bg-footer)',
        '#333333': 'var(--border-main)',
        '#333': 'var(--border-main)',
        'var(--header-bg-color)': 'var(--bg-header)',
        'var(--main-bg-color)': 'var(--bg-main)',
        'var(--border-color)': 'var(--border-main)',
        'var(--primary-color)': 'var(--c-primary)'
    };

    for (const [oldVal, newVal] of Object.entries(colorMap)) {
        const escaped = oldVal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const re = new RegExp(escaped + '(?![a-zA-Z0-9_-])', 'gi'); // avoid replacing #333333 when matching #333
        if (oldVal === '#333') {
            // special check for 3-hex color
            content = content.replace(/#333(?![a-fA-F0-9])/gi, newVal);
        } else {
            content = content.replace(re, newVal);
        }
    }
    
    fs.writeFileSync(filePath, content);
}

function processHtml(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Add stylesheet if not present
    if (!content.includes('assets/css/style.css')) {
        content = content.replace('</head>', '    <link rel="stylesheet" href="../../assets/css/style.css">\n</head>');
    }

    // Replace <header> if present
    const hasHeaderTag = /<header[\s\S]*?<\/header>/i.test(content);
    if (hasHeaderTag) {
        content = content.replace(/<header[\s\S]*?<\/header>/i, '<div id="header-placeholder"></div>');
    }

    // Replace <footer> if present
    const hasFooterTag = /<footer[\s\S]*?<\/footer>/i.test(content);
    if (hasFooterTag) {
        content = content.replace(/<footer[\s\S]*?<\/footer>/i, '<div id="footer-placeholder"></div>');
    }

    // Add scripts if placeholder exists but scripts don't
    if ((content.includes('header-placeholder') || content.includes('footer-placeholder')) && !content.includes('assets/js/main.js')) {
        content = content.replace('</body>', '    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>\n    <script src="../../assets/js/main.js"></script>\n</body>');
    }

    fs.writeFileSync(filePath, content);
}

processDir(pagesDir);
console.log('Done replacing CSS variables and HTML components!');
