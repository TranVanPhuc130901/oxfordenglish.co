$(document).ready(function () {
    // Khởi tạo Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 0,
        items: 1,
        nav: true,
        dots: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        onTranslated: function (event) {
            // Thêm hiệu ứng chữ khi slide chuyển đổi
            let currentIndex = event.item.index; // Lấy index slide hiện tại
            $('.banner__content').addClass('active'); // Kích hoạt hiệu ứng
        },
        onTranslate: function () {
            // Ẩn hiệu ứng chữ khi slide bắt đầu chuyển
            $('.banner__content').removeClass('active');
        }
    });
});

// $(document).ready(function () {
//     // Khởi tạo Owl Carousel
//     $('.owl-carousel').owlCarousel({
//       loop: false,
//       margin: 0,
//       items: 1,
//       nav: true,
//       autoplay: false,
//       autoplayTimeout: 5000,
//       autoplayHoverPause: true,
//       onTranslated: function (event) {
//         // Lấy index slide hiện tại
//         let currentIndex = event.item.index;
  
//         // Loại bỏ class 'active' khỏi tất cả nội dung
//         $('.banner__content').removeClass('active');
  
//         // Thêm class 'active' vào nội dung của slide hiện tại
//         $('.owl-item').eq(currentIndex).find('.banner__content').addClass('active');
//       },
//       onTranslate: function () {
//         // Loại bỏ hiệu ứng chữ khi slide bắt đầu chuyển
//         $('.banner__content').removeClass('active');
//       },
//     });
  
//     // Kích hoạt class active cho slide đầu tiên
//     $('.owl-item').eq(0).find('.banner__content').addClass('active');
//   });
  
  

$(document).on('scroll', function () {
    const scrollTop = $(window).scrollTop();
    $('.banner__background').css({
      transform: `translateY(${scrollTop * 0.5}px)`,
    });
  });
  