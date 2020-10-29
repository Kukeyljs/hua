var reg_mails = document.getElementById("reg_mails");
var reg_mail = document.getElementById("reg_mail");
var reg_phones = document.getElementById("reg_phones");
var reg_phone = document.getElementById("reg_phone");
var reg_mails_d = document.getElementById("reg_mails").getElementsByTagName("div")[0];
var reg_phones_d = document.getElementById("reg_phones").getElementsByTagName("div")[0];
var reg_form = document.getElementById("reg_form");

reg_mails.onclick = function () {
    reg_mails.style.color = "#FF734C";
    reg_phones.style.color = "black";
    reg_mail.style.display = "block";
    reg_phone.style.display = "none";
    reg_mails_d.style.display = "block";
    reg_phones_d.style.display = "none";
    if (reg_phone.style.display = "none") {
        reg_form.action = "php/zcmail.php"
    }
}

reg_phones.onclick = function () {
    reg_mails.style.color = "black";
    reg_phones.style.color = "#FF734C";
    reg_phone.style.display = "block";
    reg_mail.style.display = "none";
    reg_mails_d.style.display = "none";
    reg_phones_d.style.display = "block";
    if (reg_mail.style.display = "none") {
        reg_form.action = "php/zcphone.php"
    }
}

var phonecheck = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
