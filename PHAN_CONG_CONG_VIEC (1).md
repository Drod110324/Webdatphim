# KẾ HOẠCH PHÂN CÔNG TOÀN BỘ DỰ ÁN WEB CINESTAR (5 NGƯỜI)

**Mục tiêu:** Xây dựng hệ thống đặt vé phim hoàn chỉnh (Frontend)

---

## Hữu Việt: UI LEAD & CORE SYSTEM

**Trách nhiệm:** Xây dựng layout và bộ mặt trang web.

**📂 File / Thư mục làm việc:**
- `layout.html`, `layout.css` / `style.css` (Giao diện gốc chứa Header, Footer phân bổ chung).
- `pages/HomePage/` (Nội dung trang chủ).
- `pages/StaticPages/` (Các trang phụ như Liên hệ, Giới thiệu, 404 Error page).

- **Thiết kế hệ thống (Design System):** Định nghĩa mã màu, font chữ, kiểu dáng button/input dùng chung cho cả 5 người.
- **Layout tổng thể:** Code Header, Footer và Thanh điều hướng Responsive.
- **Trang chủ (Homepage):** Xây dựng trang chủ hoàn chỉnh (Slider, Quick Booking Bar, Promo blocks).
- **Trang phụ & Lỗi (Mới):** Cắt template các trang tĩnh (Giới thiệu, Liên hệ...) và trang báo lỗi (404 Not Found).
- **Hỗ trợ kỹ thuật:** Ghép code của 4 thành viên còn lại vào một hệ thống thống nhất.

---

## Hoàng Khôi: MOVIE CATALOG & SEARCH

**Trách nhiệm:** Quản lý kho phim và tìm kiếm.

**📂 File / Thư mục làm việc:**
- `pages/Movies/` (Danh sách phim).
- `pages/SearchResult/` (Kết quả tìm kiếm).
- `pages/Cinemas/` (Danh sách cụm rạp chung).
- `pages/Promotions/` (Trang Tin tức, Khuyến mãi).

- **Trang Danh sách phim:** Chia tab "Đang chiếu", "Sắp chiếu", "Suất chiếu sớm".
- **Bộ lọc phim (Filter):** Code giao diện lọc phim theo Thể loại, Định dạng (2D/3D), Cụm rạp.
- **Tìm kiếm:** Trang kết quả tìm kiếm phim.
- **Cụm rạp:** Trang danh sách các rạp Cinestar trên toàn quốc (kèm địa chỉ, bản đồ).
- **Tin tức & Khuyến mãi (Mới):** Cập nhật danh mục và thông tin chi tiết khuyến mãi/sự kiện.

---

## Đình Khoa: SHOWTIME ENGINE & MOVIE DETAIL

**Trách nhiệm:** Thông tin phim và lịch chiếu.

**📂 File / Thư mục làm việc:**
- `pages/MovieDetail/` (Trang chi tiết của 1 bộ phim).
- `pages/Showtimes/` (Trang danh sách lịch chiếu).
- `pages/CinemaDetail/` (Trang hiển thị thông tin giá vé/phòng chiếu 1 rạp).

- **Trang Chi tiết phim:** Nội dung phim, diễn viên, Trailer (Modal popup).
- **Lịch chiếu:** Code thanh chọn ngày (Date Slider) và danh sách suất chiếu của các rạp.
- **Thông tin rạp:** Giá vé, các loại phòng chiếu (Standard, Gold Class).

---

## Quang Chiến: BOOKING EXPERIENCE (CHỌN GHẾ & BẮP NƯỚC)

**Trách nhiệm:** Hệ thống đặt chỗ ngồi xem phim và dịch vụ đi kèm.

**📂 File / Thư mục làm việc:**
- `pages/SeatSelection/` (Sơ đồ chọn ghế ngồi).
- `pages/Concession/` (Giao diện mua combo Bắp/Nước).
- `pages/BookingSummary/` (Trang tóm tắt đơn hàng/vùng hiển thị giỏ hàng).

- **Sơ đồ ghế ngồi:** Thiết kế sơ đồ phòng chiếu với các loại ghế (Thường, VIP, Đôi).
- **Logic tương tác:** Click chọn ghế, đổi màu ghế đã chọn, cảnh báo nếu chọn sai (ví dụ bỏ trống 1 ghế ở giữa).
- **Chọn Bắp Nước (Mới):** Thiết kế bước chọn món ăn kèm sau khi chọn ghế.
- **Tóm tắt đơn hàng:** Thanh hiển thị thông tin phim, số ghế, bắp nước đã chọn và tổng tiền tạm tính.

---

## Quang Vinh: ACCOUNT, PAYMENT & ADMIN UI

**Trách nhiệm:** Người dùng, thanh toán và giao diện quản lý.

**📂 File / Thư mục làm việc:**
- `pages/Account/` (Đăng nhập, Đăng ký, Quên mật khẩu, Profile, Lịch sử mua vé).
- `pages/Payment/` (Trang chọn phương thức thanh toán).
- `pages/TicketConfirmation/` (Trang hiển thị vé điện tử/Mã QR sau khi mua).
- `pages/Admin/` (Bộ Template Dashboard quản trị).

- **Thành viên:** Trang Đăng nhập/Đăng ký, **Quên mật khẩu / Đổi mật khẩu (Mới)**, Trang cá nhân, Lịch sử đặt vé.
- **Thanh toán:** Trang chọn phương thức thanh toán & Trang xác nhận kèm Vé điện tử (QR Code).
- **Admin UI:** Làm các trang khung (Template) quản trị: Quản lý phim, Quản lý suất chiếu, Rạp/Bắp nước (Dành cho quản lý rạp).

---

## QUY TRÌNH LÀM VIỆC VỚI GITHUB (DÀNH CHO NHÓM 5 NGƯỜI)

Để tránh việc 5 người code đè lên nhau, nhóm cần tuân thủ quy trình sau:

### 1. Chuẩn bị (Nhóm trưởng - Người 01 làm)

- Tạo một Repository trên GitHub
- Vào mục **Settings -> Collaborators** để mời 4 thành viên còn lại vào (Mọi người cần check Mail để đồng ý).
- Đẩy bộ khung code ban đầu (`index.html`, `style.css`) lên để mọi người tải về.

### 2. Luồng làm việc hàng ngày (Mọi thành viên)

Mỗi người nên làm việc trên một **Nhánh (Branch)** riêng để không gây lỗi cho bản chính.

- **Lệnh tạo nhánh mới (Chỉ làm 1 lần đầu):**
  `git checkout -b (tên người làm)` (ví dụ: `git checkout -b feature-booking`)
- **Trước khi code (Luôn cập nhật code mới nhất từ nhóm):**
  `git pull origin main`
- **Sau khi code xong (Lưu và đẩy lên GitHub):**
  1. `git add .`
  2. `git commit -m "Mô tả việc vừa làm"`
  3. `git push origin (tên người làm)`

### 3. Hợp nhất nội dung (Merge)

- Sau khi `push` lên nhánh riêng, hãy lên giao diện web của GitHub để tạo một **Pull Request (PR)**.
- Nhóm trưởng sẽ kiểm tra và nhấn **Merge** để gộp code của bạn vào bản chính `main`.
