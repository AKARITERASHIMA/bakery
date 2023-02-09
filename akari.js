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

$(function () {
    $(".slider").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,

    })

})