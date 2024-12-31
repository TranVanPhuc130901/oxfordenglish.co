document.addEventListener("DOMContentLoaded", function() {
    // Lấy tất cả các nút điều hướng
    const navItems = document.querySelectorAll(".course-tabs__nav-item");
    // Lấy tất cả các tab nội dung
    const tabItems = document.querySelectorAll(".course-tabs__content-item");

    // Lặp qua từng nút điều hướng và thêm sự kiện click
    navItems.forEach((navItem) => {
        navItem.addEventListener("click", function() {
            // Xóa lớp active khỏi tất cả các nút
            navItems.forEach((item) => item.classList.remove("course-tabs__nav-item--active"));

            // Xóa lớp active khỏi tất cả các tab nội dung
            tabItems.forEach((tab) => tab.classList.remove("course-tabs__content-item--active"));

            // Thêm lớp active vào nút được nhấn
            navItem.classList.add("course-tabs__nav-item--active");

            // Lấy giá trị data-tab của nút được nhấn
            const targetTab = navItem.getAttribute("data-tab");

            // Tìm và hiển thị tab nội dung tương ứng
            const activeTab = document.getElementById(targetTab);
            if (activeTab) {
                activeTab.classList.add("course-tabs__content-item--active");
            }
        });
    });
});


document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling; // Lấy phần tử nội dung
        const icon = this.querySelector('.faq-icon'); // Lấy icon
        const parentItem = this.parentElement; // Lấy phần tử cha là .faq-item

        // Toggle trạng thái của mục hiện tại
        if (content.style.maxHeight) {
            // Nếu đã mở, đóng lại
            content.style.maxHeight = null;
            icon.classList.remove('active'); // Gỡ lớp active của icon
            parentItem.classList.remove('faq-item__active'); // Gỡ lớp active của mục
        } else {
            // Nếu đang đóng, mở ra
            content.style.maxHeight = content.scrollHeight + 'px';
            icon.classList.add('active'); // Thêm lớp active cho icon
            parentItem.classList.add('faq-item__active'); // Thêm lớp active cho mục
        }
    });
});