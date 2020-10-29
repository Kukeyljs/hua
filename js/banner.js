var $banner = $("#banner");

var bannerImgArr = document.getElementById("banner").getElementsByTagName("li");

$(bannerImgArr).appendTo("bannerImgArr");

var lock = true;

var idx = 0;

var nextimg = function () {

    if (!lock) {
        return;
    }
    lock = false;
    animate(bannerImgArr[idx], {
        opacity: 0
    }, 1000);
    idx++;
    idx = idx >= bannerImgArr.length ? 0 : idx;
    animate(bannerImgArr[idx], {
        opacity: 1
    }, 1000, function () {
        lock = true;
    });
}

var timer = setInterval(function () {
    nextimg();
}, 5000)


// 封装一个函数 能够实现动画 
function animate(ele, targetObj, duration, callback) {
    // 定义一个单次间隔
    var interval = 20;
    // 总次数
    var allCount = duration / interval;

    // 总距离
    var distanceObj = {};
    for (var i in targetObj) {
        // 给当前对象赋予一个属性 并存储 终点值 - 初始值 也就是总距离
        distanceObj[i] = targetObj[i] - parseInt(getComputedStyle(ele)[i])
        // console.log(targetObj[i] , i, parseInt(getComputedStyle(ele)[i]))
    }

    // 定义计数器
    var count = 0;
    var timer = setInterval(function () {
        // 计数器累加
        count++;
        for (var i in distanceObj) {
            if (i.toLowerCase() === "opacity") {
                ele.style[i] = (targetObj[i] - distanceObj[i]) + distanceObj[i] / allCount * count;
            } else {
                ele.style[i] = (targetObj[i] - distanceObj[i]) + distanceObj[i] / allCount * count + "px";
            }
        }
        if (count >= allCount) {
            clearInterval(timer);
            // 强行修正 
            for (var i in targetObj) {
                if (i.toLowerCase() === "opacity") {
                    ele.style[i] = targetObj[i];
                } else {
                    ele.style[i] = targetObj[i] + "px";
                }
            }
            // if (callback) {
            // 	callback()
            // }
            // 短路写法 等价于上面的if判定
            callback && callback();
        }
    }, interval);
}