var reg_mix = document.getElementById("reg_mix");
var reg_wechat = document.getElementById("reg_wechat");

var reg_mixp = document.getElementById("reg_mix").getElementsByTagName("div")[0];
var reg_wechatp = document.getElementById("reg_wechat").getElementsByTagName("div")[0];

var phone_dl = document.getElementById("phone_dl");
var pdl_rt = document.getElementById("phone_dl").getElementsByClassName("dl_rt")[0].getElementsByTagName("p")[0];
var mix_dl = document.getElementById("mix_dl");
var mdl_rt = document.getElementById("mix_dl").getElementsByClassName("dl_rt")[0].getElementsByTagName("p")[0];
var sca_dl = document.getElementById("sca_dl");

var dl_but = document.getElementById("dl_but");

var phone_but = document.getElementsByClassName("phone_but")[0];

var user_register_sub = document.getElementsByClassName("user_register_sub")[0];

var username = document.getElementById("mix_dl").getElementsByClassName("user_register_main_a")[0].getElementsByTagName("input")[0];
var userpassword = document.getElementById("mix_dl").getElementsByClassName("userpassword")[0];

pdl_rt.onclick = function () {
    mix_dl.style.display = "block";
    phone_dl.style.display = "none";
    sca_dl.style.display = "none"
}

mdl_rt.onclick = function () {
    phone_dl.style.display = "block";
    mix_dl.style.display = "none";
    sca_dl.style.display = "none"
}

reg_mix.onclick = function () {
    phone_dl.style.display = "block";
    mix_dl.style.display = "none";
    sca_dl.style.display = "none";
    reg_mixp.style.display = "block";
    reg_wechatp.style.display = "none";
    dl_but.style.display = "block";
}

reg_wechat.onclick = function () {
    phone_dl.style.display = "none";
    mix_dl.style.display = "none";
    sca_dl.style.display = "block"
    reg_mixp.style.display = "none";
    reg_wechatp.style.display = "block";
    dl_but.style.display = "none";
}

phone_but.onclick = function () {
    alert("仅测试用，请切换为账号密码的混合登录方法")
}

user_register_sub.onclick = function () {
    if (phone_dl.style.display === "block") {
        alert("仅测试用，请切换为账号密码的混合登录方法")
        reg_form.action = "#";
    } else if (phone_dl.style.display === "") {
        alert("仅测试用，请切换为账号密码的混合登录方法")
        reg_form.action = "#";
    } else if (lock === 2) {
        var usernamev = username.value;
        var userpasswordv = userpassword.value

        QF.post("php/dl.php", {
            userid: usernamev,
            password: userpasswordv
        }, function (date) {
            if (!date.error) {
                alert("登录成功");
                location.reload(true);
            } else {
                alert("登录失败")
            }
        })
    } else if (lock === 1) {
        var usernamev = username.value;
        var userpasswordv = userpassword.value

        QF.post("php/dl.php", {
            userid: usernamev,
            password: userpasswordv
        }, function (date) {
            if (!date.error) {
                alert("登录成功");
                location.reload(true);
            } else {
                alert("登录失败")
            }
        })
    }
}

var lock = 3;

username.onblur = function () {
    if (phonecheck.test(username.value)) {
        lock = 1;

    } else if (emailcheck.test(username.value)) {
        lock = 2;
    } else {
        alert("请输入邮箱或手机号")
        lock = 3;
    }
}

var phonecheck = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
var emailcheck = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

var isLogin = QF.getCookie("name");

if (isLogin != undefined) {
    console.log(1);

    setTimeout(function () {
        location.href = "hua.html";
    }, 500);
}

var use_num = document.getElementsByClassName("user_buynum");

var shoppingCart = JSON.parse(localStorage.getItem("cart")) || [];

function user_n() {
    if (shoppingCart.length > 0) {
        for (var sl = 0; sl < shoppingCart.length; sl++) {
            use_num[sl].innerHTML = `${shoppingCart.length}`
        }
    }
}

user_n();