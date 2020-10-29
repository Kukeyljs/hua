var $side_top = $(".side_top");
var side_top = document.getElementsByClassName("side_top")[0];

var timer = null;

// 显示top

$(window).scroll(function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
        if ($(window).scrollTop() >= 200) {
            side_top.style.display = "block"
        } else {
            side_top.style.display = "none"
        }
    }, 200)
});

//top弹到最上面

$(side_top).click(function () {
    let tim = $(window).scrollTop();

    if ($(window).scrollTop() > 0) {
        var up = setInterval(function () {
            tim = tim - 20;
            $(window).scrollTop(tim);
            if (tim <= 0) {
                clearInterval(up);
            }
        })
    }
})

