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