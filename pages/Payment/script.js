// Hiển thị dữ liệu thanh toán

document.getElementById("movieName").innerText =
    localStorage.getItem("movieName") || "Chưa chọn";

document.getElementById("cinema").innerText =
    localStorage.getItem("cinema") || "Chưa có";

document.getElementById("showtime").innerText =
    localStorage.getItem("showtime") || "Chưa có";

document.getElementById("seats").innerText =
    localStorage.getItem("seats") || "Chưa chọn ghế";

document.getElementById("combo").innerText =
    localStorage.getItem("combo") || "Không có";

document.getElementById("totalPrice").innerText =
    localStorage.getItem("totalPrice") || "0đ";