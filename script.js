// script.js - dùng cho toàn bộ website

// Hàm scroll lên đầu trang khi click vào logo hoặc header
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Thêm sự kiện click cho header title
const headerTitle = document.querySelector("header h1");
if(headerTitle){
    headerTitle.style.cursor = "pointer";
    headerTitle.addEventListener("click", scrollToTop);
}

// Hàm hiển thị thông báo tạm thời
function showNotification(message, duration = 2000) {
    const notif = document.createElement("div");
    notif.innerText = message;
    notif.style.position = "fixed";
    notif.style.bottom = "20px";
    notif.style.left = "50%";
    notif.style.transform = "translateX(-50%)";
    notif.style.backgroundColor = "#6C63FF";
    notif.style.color = "white";
    notif.style.padding = "10px 20px";
    notif.style.borderRadius = "8px";
    notif.style.boxShadow = "0 2px 5px rgba(0,0,0,0.3)";
    notif.style.zIndex = 1000;
    document.body.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, duration);
}

// Ví dụ sử dụng:
// showNotification("Chào mừng đến với Gen Z An Toàn!");
