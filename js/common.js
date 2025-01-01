// $(document).on('scroll', function() {
//     const scrollTop = $(window).scrollTop();
//     $('.banner__background').css({
//         transform: `translateY(${scrollTop * 0.5}px)`,
//     });
// });


$(document).on('scroll', function() {
    const scrollTop = $(window).scrollTop();
    $('.banner__background img').css({
        transform: `translateY(${scrollTop * 0.5}px)`,
    });
});

$(document).ready(function () {
    $('.header__nav-toggle--mobile').on('click', function () {
      const nav = $('.header__nav');
  
      if (nav.hasClass('active')) {
        // Nếu menu đang mở, thu gọn lại
        nav.animate(
          { height: '0px' }, // Thu gọn chiều cao về 0
          300, // Thời gian thực hiện (300ms)
          function () {
            // Ẩn hoàn toàn menu sau khi thu gọn
            nav.css('display', 'none').removeClass('active');
          }
        );
      } else {
        // Nếu menu đang đóng, mở ra
        nav.css('display', 'block') // Hiển thị menu trước khi mở rộng
          .animate(
            { height: nav.get(0).scrollHeight + 'px' }, // Mở chiều cao tự động
            300 // Thời gian thực hiện (300ms)
          )
          .addClass('active'); // Thêm class active
      }
    });
  });
  
  