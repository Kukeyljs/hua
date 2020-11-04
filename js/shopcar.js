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

    var shoppingCart = JSON.parse(localStorage.getItem("cart")) || [];

    var table = document.getElementsByClassName('shopcar_list')[0];

    // var compute = document.getElementById("compute");
    // 定义一个渲染购物车的方法
    function render() {
        table.innerHTML = ""
        // 渲染购物车的数据
        if (shoppingCart.length) {
            table.innerHTML += shoppingCart.map(function (value) {
                return `
                <li class="shopcar_li" data-goodsid="${value.goods_id}">
                <img src="${value.goods_img}" alt="">
                <span>
                    <p>${value.goods_name}</p>
                    <p>${value.goods_title}</p>
                </span>
                <h5>￥${value.goods_price}</h5>
                <div class="goods_num">
                    <button class="dim_num" data-goodsid="${value.goods_id}">-</button>
                    <input type="text" placeholder="${value.cart_number}">
                    <button class="add_num" data-goodsid="${value.goods_id}">+</button>
                </div>
                <p class="goods_clear" data-goodsid="${value.goods_id}">删除</p>
            </li>
                `
            }).join("");

        } else {
            table.innerHTML += "<i>您的购物车是空的    <a href='./list.html'>去选购吧</a></i>"
        }
    }

    render();

    var total = document.getElementsByClassName("goods_total")[0].getElementsByTagName("i")[0];

    function count() {

        var isCheck = shoppingCart.every(function (value) {
            return value.isChecked;
        })
        var sca = [];

        if (shoppingCart.length) {
            sca = shoppingCart.map(function (value) {
                var price_sum = value.goods_price * value.cart_number;
                sca.push(price_sum)
                var sum = 0;
                for (var i = sca.length - 1; i >= 0; i--) {
                    sum += sca[i];
                }
                total.innerHTML = `${sum}`
            }).join("");
        }
    }

    count()

    table.addEventListener("click", function (e) {
        if (e.target.className.includes("goods_clear")) {
            var goods_id = e.target.getAttribute("data-goodsid");
            var index = shoppingCart.findIndex(function (value) {
                return value.goods_id === goods_id;
            })
            shoppingCart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(shoppingCart));
            render();
            count();
        }
    });

    table.addEventListener("click", function (e) {
        if (e.target.className.includes("add_num")) {
            var goods_id = e.target.getAttribute("data-goodsid");
            var goods = shoppingCart.find(function (value) {
                return value.goods_id === goods_id;
            });
            goods.cart_number++;
            localStorage.setItem("cart", JSON.stringify(shoppingCart));
            render();
            count();
            user_n();
        }
    });

    table.addEventListener("click", function (e) {
        if (e.target.className.includes("dim_num")) {
            var goods_id = e.target.getAttribute("data-goodsid");
            var goods = shoppingCart.find(function (value) {
                return value.goods_id === goods_id;
            });
            goods.cart_number--;
            if (goods.cart_number === 0) {
                goods.cart_number = 1;
                alert("请至少买一件")
            }
            localStorage.setItem("cart", JSON.stringify(shoppingCart));
            render();
            count();
            user_n();
        }
    });

    var sub_con = document.getElementsByClassName("sub_con")[0];

    var sub_but = document.getElementsByClassName("sub_but")[0];

    sub_con.onclick = function () {
        location.href = "list.html"
    }

    sub_but.onclick = function () {
        localStorage.removeItem("cart")
        alert("已成功支付")
        location.reload();
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