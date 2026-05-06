/**
 * Dữ liệu mẫu danh sách phim
 * Bao gồm các mục: Phim đang chiếu, Phim sắp chiếu, Suất chiếu sớm
 */
const movieData = {
    'now-showing': [
        {
            title: 'KIMETSU NO YAIBA - THE MOVIE: INFINITY CASTLE',
            format: '2D',
            ageRating: 'T16',
            ageSub: 'TEEN',
            category: 'Hoạt Hình',
            duration: "120'",
            country: 'Nhật Bản',
            language: 'Lồng Tiếng',
            image: '../../assets/images/movie demon.webp'
        },
        {
            title: 'PHÍ PHÔNG: QUỶ MÁU RỪNG THIÊNG',
            format: '2D',
            ageRating: 'T16',
            ageSub: 'TEEN',
            category: 'Kinh Dị',
            duration: "120'",
            country: 'Việt Nam',
            language: 'VN',
            image: '../../assets/images/movie phi phong.webp'
        },
        {
            title: 'ANH HÙNG',
            format: '2D',
            ageRating: 'T13',
            ageSub: 'KID',
            category: 'Phiêu Lưu, Khoa Học Viễn Tưởng',
            duration: "122'",
            country: 'Hoa Kỳ',
            language: 'Phụ Đề',
            image: '../../assets/images/movie anh hung.png'
        },
        {
            title: 'THẨM MỸ VIỆN ÂM PHỦ',
            format: '2D',
            ageRating: 'T16',
            ageSub: 'TEEN',
            category: 'Hồi Hộp, Kinh Dị',
            duration: "100'",
            country: 'Việt Nam',
            language: 'VN',
            image: '../../assets/images/movie tham my vien.png'
        }
    ],
    'coming-soon': [
        {
            title: 'MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ II',
            format: '2D',
            ageRating: 'T18',
            ageSub: 'ADULT',
            category: 'Thần Thoại, Phiêu Lưu, Hành Động',
            duration: "116'",
            country: 'Khác',
            language: 'Phụ Đề',
            releaseDate: '15/05/2026',
            image: '../../assets/images/movie mortal kombat.png'
        }
    ],
    'early-screening': [
        {
            title: 'MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ II',
            format: '2D',
            ageRating: 'T18',
            ageSub: 'ADULT',
            category: 'Thần Thoại, Phiêu Lưu, Hành Động',
            duration: "116'",
            country: 'Khác',
            language: 'Phụ Đề',
            releaseDate: '15/05/2026',
            image: '../../assets/images/movie mortal kombat.png'
        }
    ]
};

// Khai báo các phần tử DOM cho bộ lọc
const filterCategory = document.getElementById('filter-category');
const filterTime = document.getElementById('filter-time');
const filterAge = document.getElementById('filter-age');
const allFilters = [filterCategory, filterTime, filterAge];

/**
 * Cập nhật trạng thái hiển thị của ô select khi có giá trị được chọn
 * (Thêm viền vàng khi có giá trị)
 */
function updateFilterState(select) {
    if (select.value) {
        select.classList.add('has-value');
    } else {
        select.classList.remove('has-value');
    }
}

/**
 * Tự động trích xuất các thể loại phim từ dữ liệu và đổ vào ô chọn Thể loại
 */
function populateCategoryFilter() {
    const allCategories = new Set();

    // Thu thập tất cả các thể loại từ mọi mục phim
    Object.values(movieData).forEach(movies => {
        movies.forEach(movie => {
            // Tách các thể loại nếu một phim có nhiều thể loại (cách nhau bằng dấu phẩy)
            const cats = movie.category.split(',').map(c => c.trim());
            cats.forEach(c => allCategories.add(c));
        });
    });

    const sortedCategories = Array.from(allCategories).sort();

    // Render danh sách thể loại vào dropdown
    filterCategory.innerHTML = '<option value="">Tất cả thể loại</option>' +
        sortedCategories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
}

/**
 * Hàm chính xử lý lọc và hiển thị lại danh sách phim
 */
function filterAndRenderMovies() {
    const category = filterCategory.value.toLowerCase();
    const age = filterAge.value;
    const time = filterTime.value;

    // Duyệt qua từng tab nội dung (Đang chiếu, Sắp chiếu...)
    for (const [id, movies] of Object.entries(movieData)) {
        const container = document.querySelector(`#${id} .movie-grid`);
        if (!container) continue;

        // Thực hiện lọc theo tiêu chí người dùng đã chọn
        const filteredMovies = movies.filter(movie => {
            const movieCategory = movie.category.toLowerCase();
            const matchCategory = !category || movieCategory.includes(category);
            const matchAge = !age || movie.ageRating === age;
            return matchCategory && matchAge;
        });

        // Gọi hàm render để cập nhật giao diện
        renderMovieGrid(container, filteredMovies);
    }
}

/**
 * Hàm render danh sách phim ra HTML
 */
function renderMovieGrid(container, movies) {
    if (movies.length === 0) {
        container.innerHTML = '<div style="color: #94a3b8; grid-column: 1/-1; text-align: center; padding: 40px;">Không có phim nào khớp với bộ lọc.</div>';
        return;
    }

    container.innerHTML = movies.map(movie => `
        <div class="movie-item">
            <!-- Phần thẻ ảnh có hiệu ứng overlay -->
            <div class="movie-card">
                <a href="../MovieDetail/index.html">
                    <div class="movie-badges">
                        <div class="badge-2d">
                            <span>${movie.format}</span>
                        </div>
                        <div class="badge-t16">
                            <span class="t16-text">${movie.ageRating}</span>
                            <span class="t16-sub">${movie.ageSub}</span>
                        </div>
                    </div>
                    <img src="${movie.image}" alt="${movie.title}">
                    <div class="movie-overlay">
                        <div class="overlay-content">
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
                            </div>
                            <div class="overlay-language">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-yellow"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                <span>${movie.language}</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <!-- Phần thông tin phim dưới ảnh (Tên, ngày chiếu, nút bấm) -->
            <div class="movie-info-bottom">
                ${movie.releaseDate ? `<div class="movie-release-date">Khởi chiếu: ${movie.releaseDate}</div>` : ''}
                <div class="movie-name-bottom">${movie.title}</div>
                <div class="movie-actions-bottom">
                    <a href="https://www.youtube.com/watch?v=rq1tllAUS1I" target="_blank" class="btn-trailer-bottom">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                        <span>Xem Trailer</span>
                    </a>
                    <a href="../MovieDetail/index.html" class="btn-book-bottom">ĐẶT VÉ</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Gắn sự kiện thay đổi cho các ô lọc
allFilters.forEach(filter => {
    filter.addEventListener('change', () => {
        updateFilterState(filter);
        filterAndRenderMovies();
    });
});

/**
 * Logic chuyển đổi Tab (Đang chiếu / Sắp chiếu / Suất chiếu sớm)
 */
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');

        // Xóa class active ở tất cả các nút và nội dung
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Kích hoạt tab được chọn
        btn.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
});

// Khởi tạo ứng dụng
populateCategoryFilter();
filterAndRenderMovies();
