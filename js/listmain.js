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



;
(function () {
    var shopID = location.hash.slice(1);

    var content = document.getElementsByClassName("goods_main")[0];

    var shoppingInfo = null;

    QF.get("php/listmainid.php", {
        shopID
    }, function (data) {
        shoppingInfo = data.data;
        content.innerHTML = `
        <div class="main_pic">
        <img src="${data.data.goods_img}" alt="">
        </div>
        <div class="main_text">
        <h5>${data.data.goods_name}</h5>
        <h6>${data.data.goods_title}</h6>
        <p>¥${data.data.goods_price}</p>
        <button class="buycar">加入购物车</button>
        <button class="buy">立即购买</button>
    </div>
        `;
    });

    content.onclick = function (e) {
        if (e.target.className.toLowerCase() === "buy") {
            var shopcar = JSON.parse(localStorage.getItem("cart")) || [];
            var isExist = shopcar.find(function (value) {
                return value.goods_id === shoppingInfo.goods_id;
            });
            if (isExist) {
                isExist.cart_number++;
            } else {
                shoppingInfo.cart_number = 1;
                shopcar.push(shoppingInfo);
            }
            localStorage.setItem("cart", JSON.stringify(shopcar));
            location.href = "shopcar.html"
        } else if (e.target.className.toLowerCase() === "buycar") {
            var shopcar = JSON.parse(localStorage.getItem("cart")) || [];
            var isExist = shopcar.find(function (value) {
                return value.goods_id === shoppingInfo.goods_id;
            });
            if (isExist) {
                isExist.cart_number++;
            } else {
                shoppingInfo.cart_number = 1;
                shopcar.push(shoppingInfo);
            }

            localStorage.setItem("cart", JSON.stringify(shopcar));
            alert("成功添加到购物车")
            user_n();
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

})();


















// list.onclick = function (e) {
//     if (e.target.className.includes("addToCart")) {
//         var goodsid = e.target.getAttribute("data-goodsid");
//         var shoppingInfo = shoppingInfoArr.find(function (value) {
//             return value.goods_id === goodsid;
//         });
//         var shoppingCartArr = JSON.parse(localStorage.getItem("cart")) || [];
//         var isExist = shoppingCartArr.find(function (value) {
//             return value.goods_id === goodsid;
//         });
//         if (isExist) {
//             isExist.cart_number++;
//         } else {
//             shoppingInfo.cart_number = 1;
//             shoppingCartArr.push(shoppingInfo);
//         }
//         localStorage.setItem("cart", JSON.stringify(shoppingCartArr));
//     }
// }