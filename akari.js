$(function () {
    $(window).on("scroll", function () {
        if (100 < $(this).scrollTop()) {
            $(".header").addClass("change-color");
        } else {
            $(".header").removeClass("change-color");
        }
    })
    })


$("#hamburger").on("click", function () {
    $(".icon").toggleClass("close");
    $(".sm").slideToggle();
})



let index = 0;
let slideMax = $('.slide').length
$('.right-arrow').on('click', function () {
    if (index !== slideMax - 1) {
        index++;
        num = index * -1 * 100;
        $('.slide-container').css({ 'transform': `translateX(${num}%)` });
    }
})

$('.left-arrow').on('click', function () {
    if (index !== 0) {
        index--;
        num = index * -1 * 100;
        $('.slide-container').css({ 'transform': `translateX(${num}%)` })
    }
})
