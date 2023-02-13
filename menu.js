// $(function(){

// // 画面をスクロールをしたら動かしたい場合の記述
// $(img).scroll(function (){

//     fadeAnime();/* アニメーション用の関数を呼ぶ*/
//   });// ここまで画面をスクロールをしたら動かしたい場合の記述


// })
$(function () {

    var logo = jQuery('.cover');
    var height = jQuery(window).height(); //ウィンドウの高さ
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > height) { //スクロールが画面の高さを越えたら
            logo.addClass('invert');
        } else { //スクロールが画面の高さを越えなければ
            logo.removeClass('invert');
        }
    });
    
    var exit_count = 3;
    var elems_count = 3;
    function repeat_show(elems$) {
        elems_count = elems$.length;
        elems$.eq(exit_count).show('slow', function () {
            exit_count++;
            if (exit_count < elems_count) {
                repeat_show(elems$);
            }
        });
    }

    $("#button .pan-btn").click(function () {
        repeat_show($("#button section.block"));
    });
    $(function () {
        // aimation呼び出し
        if ($('.js-scroll-trigger').length) {
            scrollAnimation();
        }
    
        // aimation関数
        function scrollAnimation() {
            $(window).scroll(function () {
                $(".js-scroll-trigger").each(function () {
                    let position = $(this).offset().top,
                        scroll = $(window).scrollTop(),
                        windowHeight = $(window).height();
    
                    if (scroll > position - windowHeight + 200) {
                        $(this).addClass('is-active');
                    }
                });
            });
        }
        $(window).trigger('scroll');
    });
    
});

