// $(document).ready(function() {
//     // Khởi tạo Owl Carousel
//     $('.owl-carousel').owlCarousel({
//         loop: false,
//         margin: 0,
//         items: 1,
//         nav: true,
//         dots: true,
//         autoplay: false,
//         autoplayTimeout: 5000,
//         autoplayHoverPause: true,
//         onTranslated: function(event) {
//             // Thêm hiệu ứng chữ khi slide chuyển đổi
//             let currentIndex = event.item.index; // Lấy index slide hiện tại
//             $('.banner__content').addClass('active'); // Kích hoạt hiệu ứng
//         },
//         onTranslate: function() {
//             // Ẩn hiệu ứng chữ khi slide bắt đầu chuyển
//             $('.banner__content').removeClass('active');
//         }
//     });
// });
$(document).ready(function() {
    $('.banner__background-group.owl-carousel').owlCarousel({
        loop: false,
        margin: 0,
        items: 1,
        nav: true,
        dots: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        onInitialized: function(event) {
            // Hiển thị hiệu ứng chữ cho slide đầu tiên
            let firstContent = $(event.target).find('.owl-item.active .banner__content');
            firstContent.addClass('active');
        },
        onTranslated: function(event) {
            // Hiển thị hiệu ứng chữ cho slide hiện tại
            let currentContent = $(event.target).find('.owl-item.active .banner__content');
            currentContent.addClass('active');
        },
        onTranslate: function(event) {
            // Ẩn hiệu ứng chữ khi bắt đầu chuyển
            $(event.target).find('.banner__content').removeClass('active');
        }
    });
});





// $(document).on('scroll', function() {
//     const scrollTop = $(window).scrollTop();
//     $('.banner__background').css({
//         transform: `translateY(${scrollTop * 0.5}px)`,
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    const svgItems = document.querySelectorAll(".homepage-ratings__item svg");

    svgItems.forEach((svg) => {
        const progressCircle = svg.querySelector(".progress-circle");
        const progressText = svg.querySelector(".progress-text");
        const targetPercentage = parseInt(svg.dataset.percentage, 10);
        const radius = parseInt(svg.dataset.radius, 10);
        const circumference = 2 * Math.PI * radius;

        let currentPercentage = 0; // Bắt đầu từ 0%
        const animationDuration = 1000; // Thời gian hiệu ứng (ms)
        const intervalDuration = 10; // Tần suất cập nhật (ms)
        const step = targetPercentage / (animationDuration / intervalDuration);

        // Đặt thuộc tính cho vòng tròn tiến trình
        progressCircle.style.strokeDasharray = `${circumference}`;
        progressCircle.style.strokeDashoffset = `${circumference}`;

        // Hàm cập nhật giá trị
        const updateProgress = () => {
            if (currentPercentage < targetPercentage) {
                currentPercentage += step;
                if (currentPercentage > targetPercentage) {
                    currentPercentage = targetPercentage;
                }

                const offset = circumference - (circumference * currentPercentage) / 100;
                progressCircle.style.strokeDashoffset = offset;
                progressText.textContent = `${Math.round(currentPercentage)}%`;
            } else {
                clearInterval(intervalId);
            }
        };

        // Khởi động hiệu ứng
        const intervalId = setInterval(updateProgress, intervalDuration);
    });
});