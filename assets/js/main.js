const headerHTML = `
<link rel="stylesheet" href="../../assets/css/header.css">
<header class="header">
    <div class="header-container">
        <a href="../HomePage/index.html" class="header-logo" style="text-decoration: none;">DATPHIM</a>
        <div class="header-search">
            <input type="text" placeholder="Tìm kiếm phim, rạp...">
            <button type="submit" class="search-btn">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </button>
        </div>
        <nav class="header-nav">
            <a href="../Movies/index.html" class="nav-link active">Phim</a>
            <a href="../Cinema/index.html" class="nav-link">Rạp</a>
            <a href="../Promotion/index.html" class="nav-link">Ưu đãi</a>
        </nav>
        <div class="header-actions">
            <button class="bell-btn">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
            </button>
            <a href="../Login/index.html" class="login-btn" style="text-decoration: none;">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Đăng nhập
            </a>
        </div>
    </div>
</header>
`;
const footerHTML = `
<link rel="stylesheet" href="../../assets/css/footer.css">
<footer class="site-footer">
    <div class="footer-container">
        <div class="footer-row">
            <div class="footer-col">
                <a href="../HomePage/index.html" class="footer-logo">DATPHIM</a>
                <p><strong>CÔNG TY TNHH DATPHIM VIỆT NAM</strong></p>
                <p>Trụ sở: 123 Đường Phim Ảnh, Quận 1, TP. Hồ Chí Minh</p>
                <p>Hotline: <strong style="color: var(--primary);">1900 1234</strong></p>
                <p>Email: hotro@datphim.vn</p>
            </div>
            <div class="footer-col">
                <h4>Khám Phá</h4>
                <ul>
                    <li><a href="../Movies/index.html">Phim Đang Chiếu</a></li>
                    <li><a href="../Movies/index.html">Phim Sắp Chiếu</a></li>
                    <li><a href="../Cinema/index.html">Hệ Thống Rạp</a></li>
                    <li><a href="../Promotion/index.html">Khuyến Mãi & Sự Kiện</a></li>
                    <li><a href="../Login/index.html">Thành Viên</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Hỗ Trợ</h4>
                <ul>
                    <li><a href="#">Hướng dẫn đặt vé online</a></li>
                    <li><a href="#">Quy định rạp chiếu</a></li>
                    <li><a href="#">Chính sách bảo mật</a></li>
                    <li><a href="#">Câu hỏi thường gặp (FAQ)</a></li>
                    <li><a href="#">Điều khoản sử dụng</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Kết Nối Với Chúng Tôi</h4>
                <div class="social-links">
                    <a href="#" title="Facebook">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="#" title="YouTube">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                    </a>
                    <a href="#" title="Instagram">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                </div>
                <h4 style="margin-top: 30px;">Chấp Nhận Thanh Toán</h4>
                <div class="payment-methods">
                    <span>MOMO</span>
                    <span>VNPay</span>
                    <span>ZaloPay</span>
                    <span>VISA/JCB</span>
                    <span>ATM</span>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Bản quyền thuộc về Hệ thống Rạp chiếu phim DATPHIM. Mọi nội dung trên website đều được bảo vệ.</p>
        </div>
    </div>
</footer>
`;
$(document).ready(function() {
    if ($("#header-placeholder").length) {
        $("#header-placeholder").html(headerHTML);
    }
    if ($("#footer-placeholder").length) {
        $("#footer-placeholder").html(footerHTML);
    }
});
