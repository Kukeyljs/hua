;
(function () {
    var list = document.getElementsByClassName("goods_main")[0];

    var shoppingInfoArr = [];

    function sendAjax(page) {
        QF.get("php/list.php", {
            page,
            num: 15
        }, function (data) {
            if (!data.error) {
                shoppingInfoArr = data.data;
                list.innerHTML = "";
                data.data.forEach(function (value) {
                    list.innerHTML += `
                    <div class="goods_box">
                    <a href="listmain.html#${value.goods_id}"> <img src="${value.goods_img}" alt=""></a>
                    <p>￥${value.goods_price}</p>
                    <h5><a href="listmain.html#${value.goods_id}">${value.goods_name}</a></h5>
                    <h6><a href="listmain.html#${value.goods_id}">${value.goods_title}</a></h6>
                    <span class="addToCart" data-goodsid="${value.goods_id}">加入购物车</span>
                    </div>
                     `;

                });
            }
        })
    }




    var page = 0;
    sendAjax(page);

    var leftBtn = document.getElementsByClassName("btn_left")[0];
    var rightBtn = document.getElementsByClassName("btn_right")[0];

    leftBtn.onclick = function () {
        if (page <= 0) {
            alert("已经没有啦")
            return;
        }
        page--;
        sendAjax(page);
    }

    rightBtn.onclick = function () {
        if (page >= 5) {
            alert("已经没有啦")
            return;
        }
        page++;
        sendAjax(page);
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

    list.onclick = function (e) {
        if (e.target.className.includes("addToCart")) {
            var goodsid = e.target.getAttribute("data-goodsid");

            var shoppingInfo = shoppingInfoArr.find(function (value) {
                return value.goods_id === goodsid;
            });

            var shoppingCartArr = JSON.parse(localStorage.getItem("cart")) || [];

            var isExist = shoppingCartArr.find(function (value) {
                return value.goods_id === goodsid;
            });
            if (isExist) {
                isExist.cart_number++;
            } else {
                shoppingInfo.cart_number = 1;
                shoppingCartArr.push(shoppingInfo);
            }
            localStorage.setItem("cart", JSON.stringify(shoppingCartArr));
            alert("已加入购物车")
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
                console.log(use_num[0]);

                use_num[sl].innerHTML = `${shoppingCart.length}`
            }
        }
    }

    user_n();



})();