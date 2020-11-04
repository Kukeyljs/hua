var reg_mails = document.getElementById("reg_mails");
var reg_mail = document.getElementById("reg_mail");
var reg_phones = document.getElementById("reg_phones");
var reg_phone = document.getElementById("reg_phone");
var reg_mails_d = document.getElementById("reg_mails").getElementsByTagName("div")[0];
var reg_phones_d = document.getElementById("reg_phones").getElementsByTagName("div")[0];
var reg_form = document.getElementById("reg_form");

var registerbut = document.getElementsByClassName("user_register_sub")[0];

var phone_name = document.getElementsByClassName("phone_name")[0];
var phone_pw = document.getElementsByClassName("phone_pw")[0];
var mail_name = document.getElementsByClassName("mail_name")[0];
var mail_pw = document.getElementsByClassName("mail_pw")[0];



reg_mails.onclick = function () {
    reg_mails.style.color = "#FF734C";
    reg_phones.style.color = "black";
    reg_mail.style.display = "block";
    reg_phone.style.display = "none";
    reg_mails_d.style.display = "block";
    reg_phones_d.style.display = "none";
}



reg_phones.onclick = function () {
    reg_mails.style.color = "black";
    reg_phones.style.color = "#FF734C";
    reg_phone.style.display = "block";
    reg_mail.style.display = "none";
    reg_mails_d.style.display = "none";
    reg_phones_d.style.display = "block";
}

var idx = 1;

phone_name.onblur = function () {
    if (phonecheck.test(phone_name.value)) {
        idx = 2;
    } else {
        idx = 1;
        alert("请输入正确的手机号");
    }
}

mail_name.onblur = function () {
    if (emailcheck.test(mail_name.value)) {
        idx = 2;
    } else {
        idx = 1;
        alert("请输入正确的邮箱");
    }
}

registerbut.onclick = function () {
    if (reg_mails_d.style.display === "block" && idx === 2) {
        var usernamev = mail_name.value;
        var userpasswordv = mail_pw.value
        QF.post("php/zcmail.php", {
            mail: usernamev,
            password: userpasswordv
        }, function (date) {
            if (!date.error) {
                alert("注册成功");
                setTimeout(function () {
                    location.href = "dl.html";
                }, 1000)
            } else {
                alert("注册失败")
            }
        })
    } else if (reg_phones_d.style.display = "block" && idx === 2) {
        var usernamev = phone_name.value;
        var userpasswordv = phone_pw.value
        QF.post("php/zcphone.php", {
            phone: usernamev,
            password: userpasswordv
        }, function (date) {
            if (!date.error) {
                alert("注册成功");
                setTimeout(function () {
                    location.href = "dl.html";
                }, 1000)
            } else {
                alert("注册失败")
            }
        })
    }
}

var isLogin = QF.getCookie("name");

if (isLogin != undefined) {
    setTimeout(function () {
        location.href = "hua.html";
    }, 500);
}

var shopcar = document.getElementsByClassName("shopcar")[0];
shopcar.onclick=function(){
    location.href="shopcar.html"
}


var phonecheck = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
var emailcheck = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

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