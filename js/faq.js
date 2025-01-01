$(document).ready(function() {
    $('.faq-category__right--image.owl-carousel').owlCarousel({
        loop: false,
        margin: 0,
        items: 1,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
    });
});

document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', function () {
        const content = this.nextElementSibling; // Lấy phần tử nội dung
        const icon = this.querySelector('.faq-icon'); // Lấy icon
        const parentItem = this.parentElement; // Lấy phần tử cha là .faq-item

        // Kiểm tra nội dung có tồn tại
        if (content) {
            if (content.style.maxHeight && content.style.maxHeight !== '0px') {
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
        }
    });
});