var navbar = document.querySelector(".navbar");
// console.log(navbar);

var menu = document.querySelector(".menu");
console.log(menu);

// ヘッダーがULタグの位置に来たらヘッダーを固定する。
window.addEventListener("scroll", function () {
    // console.log(window.pageYOffset);
    // console.log(menu.offsetTop);
    if (window.pageYOffset >= menu.offsetTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

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
