// $(document).on('scroll', function() {
//     const scrollTop = $(window).scrollTop();
//     $('.banner__background').css({
//         transform: `translateY(${scrollTop * 0.5}px)`,
//     });
// });


// $(document).on('scroll', function() {
//     const scrollTop = $(window).scrollTop();
//     $('.banner__background .banner__image').css({
//         transform: `translateY(${scrollTop * 0.5}px)`,
//     });
// });

$(document).ready(function() {
    $('.header__nav-toggle--mobile').on('click', function() {
        const nav = $('.header__nav');

        if (nav.hasClass('hidden')) {
            // Nếu menu đang mở, thu gọn lại
            nav.animate({ height: '0px' }, // Thu gọn chiều cao về 0
                300, // Thời gian thực hiện (300ms)
                function() {
                    // Ẩn hoàn toàn menu sau khi thu gọn
                    nav.css('display', 'none').removeClass('hidden');
                }
            );
        } else {
            // Nếu menu đang đóng, mở ra
            nav.css('display', 'block') // Hiển thị menu trước khi mở rộng
                .animate({ height: nav.get(0).scrollHeight + 'px' }, // Mở chiều cao tự động
                    300 // Thời gian thực hiện (300ms)
                )
                .addClass('hidden'); // Thêm class active
        }
    });
});

document.addEventListener('scroll', function() {
    const header = document.querySelector('.header__right');
    if (window.scrollY > 50) {
        header.parentNode.classList.add('header--scrolled');
    } else {
        header.parentNode.classList.remove('header--scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navSublists = document.querySelectorAll('.header__nav-sublist');

    if (navSublists) {
        navSublists.forEach(navSublist => {
            const rect = navSublist.getBoundingClientRect();
            const viewportWidth = window.innerWidth;

            // Kiểm tra nếu phần tử vượt quá màn hình
            if (rect.right > viewportWidth) {
                navSublist.style.right = '-30px'; // Thêm thuộc tính `right: -30px`
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navSearch = document.querySelector('.header__nav-search');
    const searchForm = document.querySelector('.header__search-form');
    // const navToggle = document.querySelector('.header__nav-toggle');
    const navList = document.querySelector('.header__nav-wrapper');
    const headerRight = document.querySelector('.header__right');
    const searchClose = document.querySelector('.header__search-icon--close');
    const nav = document.querySelector('.header__nav');
    const inputSearch = document.querySelector('.header__search-form .header__search-input');

    if (navSearch && searchForm && navList && headerRight && searchClose && nav) {
        // Hiển thị form tìm kiếm và thay đổi header
        navSearch.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn hành động mặc định
            searchForm.classList.add('active');
            nav.classList.remove('hidden');
            navList.classList.add('hidden'); // Ẩn nav list
            headerRight.classList.add('active'); // Thêm class active cho header__right
            inputSearch.focus();
        });

        // Đóng form tìm kiếm và phục hồi trạng thái ban đầu
        searchClose.addEventListener('click', function() {
            searchForm.classList.remove('active'); // Xóa class active khỏi form
            navList.classList.remove('hidden'); // Hiển thị lại nav list
            headerRight.classList.remove('active'); // Xóa class active khỏi header__right
        });
    }
});

const translateButton = document.getElementById("translateButton");
const flag = document.querySelector(".translate__flag");

translateButton.addEventListener("click", () => {
  flag.classList.toggle("translate__flag--hidden");
});