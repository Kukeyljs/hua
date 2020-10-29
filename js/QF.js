// 定义QF对象
var QF = {
	get: function(url, queryobj, callback) {
		// 因为queryobj是一个对象 而我们要的是querystring 所以需要进行转换
		var querystring = "";
		// 循环传递进来的对象 将它格式化成 querystring
		for (var i in queryobj) {
			querystring += i + "=" + queryobj[i] + "&";
			// 假如传递进来的对象是 {a: 1, b: 2, c: 3}
			// 第一次循环的结果是 a=1&
			// 第二次循环的结果是 a=1&b=2&
			// 第三次循环的结果实 a=1&b=2&c=3&
		}
		// 去掉最后的&
		querystring = querystring.slice(0, -1);
		// 初始化xhr对象
		var xhr = new XMLHttpRequest();
		// 绑定事件
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status === 200) {
				var responseText = xhr.responseText;
				callback && callback(JSON.parse(responseText));
			}
		}
		// 调用open 
		xhr.open("get", url + "?" + querystring, true);
		// 调用send
		xhr.send();
	},
	post: function(url, queryobj, callback) {
		// 格式化传递进来的对象
		var querystring = "";
		for (var i in queryobj) {
			querystring += i + "=" + queryobj[i] + "&";
		}
		querystring = querystring.slice(0, -1);

		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status === 200) {
				callback && callback(JSON.parse(xhr.responseText));
			}
		}
		xhr.open("post", url, true);
		xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		xhr.send(querystring);
	}
}