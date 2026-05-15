const movieData = {
    'now-showing': [
        {
            id: 'm1',
            status: 'now-showing',
            title: 'KIMETSU NO YAIBA - THE MOVIE: INFINITY CASTLE',
            format: '2D',
            ageRating: 'T16',
            ageSub: 'TEEN',
            category: 'Hoạt Hình',
            duration: "120'",
            country: 'Nhật Bản',
            language: 'Phụ Đề Việt',
            image: '../../assets/images/movie demon.webp',
            showTimes: ['09:00', '14:30', '20:00']
        },
        {
            id: 'm2',
            status: 'now-showing',
            title: 'PHÍ PHÔNG: QUỶ MÁU RỪNG THIÊNG',
            format: '2D',
            ageRating: 'T16',
            ageSub: 'TEEN',
            category: 'Kinh Dị',
            duration: "120'",
            country: 'Việt Nam',
            language: 'Tiếng Việt',
            image: '../../assets/images/movie phi phong.webp',
            showTimes: ['10:00', '16:00', '22:00']
        },
        {
            id: 'm5',
            status: 'now-showing',
            title: 'MA DA HÀN QUỐC: HỒ NUỐT NGƯỜI',
            format: '2D',
            ageRating: 'T18',
            ageSub: 'ADULT',
            category: 'Kinh Dị',
            duration: "95'",
            country: 'Hàn Quốc',
            language: 'Phụ Đề Việt',
            image: '../../assets/images/ma da.png',
            showTimes: ['11:00', '15:45', '21:15']
        },
        {
            id: 'm6',
            status: 'now-showing',
            title: 'TẠM BIỆT GOHAN',
            format: '2D',
            ageRating: 'P',
            ageSub: 'ALL',
            category: 'Drama',
            duration: "140'",
            country: 'Nhật Bản',
            language: 'Phụ Đề Việt',
            image: '../../assets/images/gohan.png',
            showTimes: ['08:30', '13:00', '18:30']
        }
    ],
    'coming-soon': [
        {
            id: 'm3',
            status: 'coming-soon',
            title: 'ANH HÙNG',
            format: '2D',
            ageRating: 'T13',
            ageSub: 'KID',
            category: 'Hành Động, Tâm Lý',
            duration: "122'",
            country: 'Việt Nam',
            language: 'Tiếng Việt',
            releaseDate: '24/04/2026',
            image: '../../assets/images/movie anh hung.png',
            showTimes: []
        }
    ],
    'early-screening': [
        {
            id: 'm4',
            status: 'early-screening',
            title: 'THẨM MỸ VIỆN ÂM PHỦ',
            format: '2D',
            ageRating: 'T16',
            ageSub: 'TEEN',
            category: 'Hồi Hộp, Kinh Dị',
            duration: "100'",
            country: 'Việt Nam',
            language: 'Tiếng Việt',
            image: '../../assets/images/movie tham my vien.png',
            showTimes: ['19:00', '22:00']
        }
    ]
};

const filterCategory = document.getElementById('filter-category');
const filterTime = document.getElementById('filter-time');
const filterAge = document.getElementById('filter-age');
const allFilters = [filterCategory, filterTime, filterAge];

function updateFilterState(select) {
    if (select.value) {
        select.classList.add('has-value');
    } else {
        select.classList.remove('has-value');
    }
}

function populateFilters(tabId = 'now-showing') {
    const allCategories = new Set();
    const allAges = new Set();
    const ageLabels = {
        'P': 'P - Mọi độ tuổi',
        'T13': 'T13 - Trên 13 tuổi',
        'T16': 'T16 - Trên 16 tuổi',
        'T18': 'T18 - Trên 18 tuổi'
    };

    const moviesInTab = movieData[tabId] || [];

    moviesInTab.forEach(movie => {
        allCategories.add(movie.category);
        allAges.add(movie.ageRating);
    });

    const currentCategoryValue = filterCategory.value;
    filterCategory.innerHTML = '<option value="">Tất cả thể loại</option>' +
        Array.from(allCategories).sort().map(cat => `<option value="${cat}">${cat}</option>`).join('');

    if (Array.from(allCategories).includes(currentCategoryValue)) {
        filterCategory.value = currentCategoryValue;
    } else {
        filterCategory.value = "";
        updateFilterState(filterCategory);
    }

    const currentAgeValue = filterAge.value;
    filterAge.innerHTML = '<option value="">Độ tuổi</option>' +
        Array.from(allAges).sort().map(age => `<option value="${age}">${ageLabels[age] || age}</option>`).join('');

    if (Array.from(allAges).includes(currentAgeValue)) {
        filterAge.value = currentAgeValue;
    } else {
        filterAge.value = "";
        updateFilterState(filterAge);
    }

    const timeOptions = [
        { value: 'morning', label: 'Buổi sáng (08:00 - 12:00)' },
        { value: 'afternoon', label: 'Buổi chiều (12:00 - 18:00)' },
        { value: 'evening', label: 'Buổi tối (18:00 - 24:00)' }
    ];
    filterTime.innerHTML = '<option value="">Giờ chiếu</option>' +
        timeOptions.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('');
}

function checkTimeMatch(showTimes, timeFilter) {
    if (!timeFilter) return true;
    if (!showTimes || showTimes.length === 0) return false;

    return showTimes.some(time => {
        const hour = parseInt(time.split(':')[0]);
        if (timeFilter === 'morning') return hour >= 8 && hour < 12;
        if (timeFilter === 'afternoon') return hour >= 12 && hour < 18;
        if (timeFilter === 'evening') return hour >= 18 && hour < 24;
        return false;
    });
}

function filterAndRenderMovies() {
    const category = filterCategory.value.toLowerCase();
    const age = filterAge.value;
    const time = filterTime.value;

    const activeTab = document.querySelector('.tab-btn.active').getAttribute('data-target');
    const movies = movieData[activeTab] || [];
    const container = document.querySelector(`#${activeTab} .movie-grid`);

    if (!container) return;

    const filteredMovies = movies.filter(movie => {
        const movieCategory = movie.category.toLowerCase();
        const matchCategory = !category || movieCategory.includes(category);
        const matchAge = !age || movie.ageRating === age;
        const matchTime = checkTimeMatch(movie.showTimes, time);
        return matchCategory && matchAge && matchTime;
    });

    renderMovieGrid(container, filteredMovies);
}

function renderMovieGrid(container, movies) {
    if (movies.length === 0) {
        container.innerHTML = '<div style="color: #94a3b8; grid-column: 1/-1; text-align: center; padding: 40px;">Không có phim nào khớp với bộ lọc.</div>';
        return;
    }

    const statusLabels = {
        'now-showing': 'Đang chiếu',
        'coming-soon': 'Sắp chiếu',
        'early-screening': 'Suất chiếu sớm'
    };

    container.innerHTML = movies.map(movie => `
        <div class="movie-item" data-id="${movie.id}">
            <div class="movie-card">
                <a href="../MovieDetail/index.html?id=${movie.id}">
                    <div class="movie-badges">
                        <div class="badge-status">
                            <span>${statusLabels[movie.status] || ''}</span>
                        </div>
                    </div>
                    <img src="${movie.image}" alt="${movie.title}">
                    <div class="movie-overlay">
                        <div class="overlay-content">
                            <div class="overlay-id">#ID: ${movie.id}</div>
                            <h3 class="overlay-title">${movie.title}</h3>
                            <div class="overlay-meta">
                                <div class="meta-item">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-yellow"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                                    <span>${movie.category}</span>
                                </div>
                                <div class="meta-item">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-yellow"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    <span>${movie.duration}</span>
                                </div>
                                <div class="meta-item">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-yellow"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                    <span>${movie.country}</span>
                                </div>
                                <div class="meta-item">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-yellow"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                    <span>${movie.language}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="movie-info-bottom">
                ${movie.releaseDate ? `<div class="movie-release-date">Khởi chiếu: ${movie.releaseDate}</div>` : ''}
                <div class="movie-name-bottom">${movie.title}</div>
                <div class="movie-actions-bottom">
                    <a href="https://www.youtube.com/watch?v=rq1tllAUS1I" target="_blank" class="btn-trailer-bottom">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                        <span>Xem Trailer</span>
                    </a>
                    <a href="../MovieDetail/index.html?id=${movie.id}" class="btn-book-bottom">ĐẶT VÉ</a>
                </div>
            </div>
        </div>
    `).join('');
}

allFilters.forEach(filter => {
    filter.addEventListener('change', () => {
        updateFilterState(filter);
    });
});

document.querySelector('.btn-filter-apply').addEventListener('click', filterAndRenderMovies);

const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');

        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(target).classList.add('active');

        populateFilters(target);
        filterAndRenderMovies();
    });
});

populateFilters('now-showing');
filterAndRenderMovies();
