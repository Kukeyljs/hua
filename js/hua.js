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

var side_me = document.getElementsByClassName("side_me")[0];
var side_med = document.getElementsByClassName("side_me")[0].getElementsByTagName("div")[0];

xy(side_me, side_med);

var side_love = document.getElementsByClassName("side_love")[0];
var side_loved = document.getElementsByClassName("side_love")[0].getElementsByTagName("div")[0];

var side_time = document.getElementsByClassName("side_time")[0];
var side_timed = document.getElementsByClassName("side_time")[0].getElementsByTagName("div")[0];

var side_call = document.getElementsByClassName("side_call")[0];
var side_calld = document.getElementsByClassName("side_call")[0].getElementsByTagName("div")[0];

var side_ser = document.getElementsByClassName("side_ser")[0];
var side_serd = document.getElementsByClassName("side_ser")[0].getElementsByTagName("div")[0];

var side_pic = document.getElementsByClassName("side_pic")[0];
var side_picd = document.getElementsByClassName("side_pic")[0].getElementsByTagName("div")[0];

var side_write = document.getElementsByClassName("side_write")[0];
var side_writed = document.getElementsByClassName("side_write")[0].getElementsByTagName("div")[0];


xy(side_love, side_loved);
xy(side_time, side_timed);
xy(side_call, side_calld);
xy(side_ser, side_serd);
xy(side_pic, side_picd);
xy(side_write, side_writed);


xy(side_love, side_loved);


function xy(a, b) {
    a.onmouseenter = function () {
        b.style.display = 'block';
        b.onmouseenter = function () {
            b.style.display = 'block';
        }
        document.onmouseover = function () {
            b.style.display = "none"
        }
    }
}

var login = document.getElementsByClassName("login")[0];
var isLogin = QF.getCookie("name");

if (isLogin != undefined) {
    let th = isLogin.indexOf("%");
    if (th === -1) {
        login.innerHTML = `<p class="login_nb">你好,${isLogin}</p><p class="login_nc">退出</p>`
    } else {
        let loginName = [];
        for (var i = 0; i < isLogin.length; i++) {
            loginName.push(isLogin[i]);
        }
        let loginNa = loginName.splice(th, 3, "@");

        let loginNb = loginName.join("");

        login.innerHTML = `<p class="login_nb">你好,${loginNb}</p><p class="login_nc">退出</p>`
    }
}

var user_exit = document.getElementsByClassName("login_nc")[0];

if (user_exit != undefined) {
    user_exit.onclick = function () {
        QF.post("php/hua.php", {
            userid: 1,
            password: 1
        }, function (date) {
            if (!date.error) {} else {
                if (date.error === 1) {
                    alert("成功退出账号")
                    setTimeout(function () {
                        location.reload(true);
                    }, 1000)
                }
            }
        })

    }
}


var shopcar = document.getElementsByClassName("shopcar")[0];
shopcar.onclick = function () {
    location.href = "shopcar.html"
}

function user_n() {
    var use_num = document.getElementsByClassName("user_buynum");

    var shoppingCart = JSON.parse(localStorage.getItem("cart")) || [];

    if (shoppingCart.length > 0) {
        for (var sl = 0; sl < shoppingCart.length; sl++) {
            use_num[sl].innerHTML = `${shoppingCart.length}`
        }
    }
}

user_n();

