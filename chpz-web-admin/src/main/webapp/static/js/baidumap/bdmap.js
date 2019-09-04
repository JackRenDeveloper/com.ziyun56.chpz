var lwzh = lwzh || {};

// 添加轨迹覆盖物
function ComplexCustomOverlay(point, text, mouseoverText) {
	this._point = point;
	this._text = text;
	this._overText = mouseoverText;
}

ComplexCustomOverlay.prototype = new BMap.Overlay();

ComplexCustomOverlay.prototype.initialize = function(map) {
	this._map = map;
	var div = this._div = $('<div></div>');
	var zIndex = BMap.Overlay.getZIndex(this._point.lat);
	div.addClass("mapbox").css({
		'z-index' : zIndex
	});
	div.attr("originalZIndex", zIndex);
	div.html(this._text);
	var that = this;
	var arrow = this._arrow = $('<div></div>');
	if (this._point.gatherDatas) {
		for (var i = 0; i < this._point.gatherDatas.length; i++) {
			arrow.addClass("gather_id_" + this._point.gatherDatas[i].id);
		}
	}

	//arrow.addClass('mapcar').css({
		//'color' : 'red',
		//'position' : 'absolute'
	//}); // 添加css样式
	//arrow.css({
		//	background : 'url("' + this._icon + '") no-repeat',
		//	width : '22px',
		//	height : '22px',
		//	top : '-10px',
			//left : '-10px'
    //});
};

ComplexCustomOverlay.prototype.draw = function() {
	var map = this._map;
	var pixel = map.pointToOverlayPixel(this._point);
	this._div.css({
		'left' : pixel.x + 'px',
		'top' : pixel.y + 'px'
	});
};
ComplexCustomOverlay.prototype.hide = function () {
    if (this._div) {
        //this._div.style.display = "none";
        this._div.css({
    		'display' : 'none'
    	});
    }
	
}
// return: -PI to PI
lwzh.getAngle = function(pt1, pt2) {
	return Math.atan2(pt2.lat - pt1.lat, pt2.lng - pt1.lng);
};

lwzh.createIcon = function(angle, point) {
	var direction_angle = 0;

	var is_red = false;
	var gatherDatas = point.gatherDatas;
	if (gatherDatas) {
		for (var i = 0; i < gatherDatas.length; i++) {
			var json_map = lwzh.parseJSON(gatherDatas[i].json_data);
			direction_angle = gatherDatas[i].direction_angle;
			if (!json_map.k || json_map.k == "0") {
				is_red = is_red || false;
			} else {
				is_red = is_red || true;
			}
		}
	}

	var imgUrl = null;
	if (is_red) {
		imgUrl = "../static/image/bdmap/arrow_red_" + direction_angle + ".png";
	} else {
		imgUrl = "../static/image/bdmap/arrow_" + direction_angle + ".png";
	}
	return imgUrl;

	var icon = new BMap.Icon(imgUrl, new BMap.Size(22, 22));
	return icon;
};

lwzh.createAngleMarker = function(direction_angle, point, html) {
	var angle = direction_angle;

	var icon = lwzh.createIcon(angle, point);
	var marker = new ComplexCustomOverlay(point, "", html);
	//marker._icon = icon;
	return marker;
};

lwzh.timePeriodToString = function(period) {
	if (isNaN(period)) {
		return null;
	}

	var second = 1000;
	var minutes = second * 60;
	var hours = minutes * 60;
	var days = hours * 24;
	var months = days * 30;
	var years = days * 365;

	if (period >= months) {
		return "≥" + Math.floor(period / months) + "个月";
	} else if (period >= days) {
		return ("≥" + Math.floor(period / days) + "天");
	} else if (period >= hours) {
		return ("≥" + Math.floor(period / hours) + "小时");
	} else if (period >= minutes) {
		return ("≥" + Math.floor(period / minutes) + "分钟");
	} else if (period >= second) {
		return ("≥" + Math.floor(period / second) + "秒");
	} else {
		return "刚刚";
	}
};

lwzh.translateXYToBaiduPoint = function(xpoint, ypoint, callback) {
	lwzh.transMoreXYToBaiduPoint([ {
		xpoint : xpoint,
		ypoint : ypoint
	} ], function(points) {
		callback && callback(points[0])
	});
};

lwzh.transMoreXYToBaiduPoint = function(datas, callback) {
	var points = [];

	var translate = true;
	for ( var i in datas) {
		var data = datas[i];
		var xpoint = data.xpoint;
		var ypoint = data.ypoint;

		if (xpoint.indexOf("bd:") == 0) {
			translate = false;
			xpoint = xpoint.substring(3);
			ypoint = ypoint.substring(3);
		}
		if (xpoint.indexOf(".") == 3 && ypoint.indexOf(".") == 2) {
			var point = new BMap.Point(xpoint, ypoint);
			points.push(point);
		}
	}

	if (translate) {
		var maxCnt = 20;
		var callbackPoints = [];

		function doTrans(tempPoints, otherPoints) {
			BMap.Convertor.transMore(tempPoints, 0, function(points) {
				callbackPoints = callbackPoints.concat(points);
				if (otherPoints && otherPoints.length > 0) {
					doTrans(otherPoints.slice(0, maxCnt), otherPoints.slice(maxCnt, otherPoints.length));
				} else {
					callback && callback(callbackPoints);
				}
			});
		}

		doTrans(points.slice(0, maxCnt), points.slice(maxCnt, points.length));
	} else {
		callback && callback(points);
	}
};

(function() {
	function load_script(xyUrl, callback) {
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = xyUrl;
		// 借鉴了jQuery的script跨域方法
		script.onload = script.onreadystatechange = function() {
			if ((!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
				callback && callback();
				// Handle memory leak in IE
				script.onload = script.onreadystatechange = null;
				if (head && script.parentNode) {
					head.removeChild(script);
				}
			}
		};
		// Use insertBefore instead of appendChild to circumvent an IE6 bug.
		head.insertBefore(script, head.firstChild);
	}

	function transMore(points, type, callback) {
		var xyUrl = "http://api.map.baidu.com/ag/coord/convert?from=" + type + "&to=4&mode=1";
		var xs = [];
		var ys = [];
		var maxCnt = 20;// 每次发送的最大个数

		var send = function() {
			var callbackName = 'cbk_' + Math.round(Math.random() * 10000); // 随机函数名
			BMap.Convertor[callbackName] = function(xyResults) {
				delete BMap.Convertor[callbackName]; // 调用完需要删除改函数

				var callbackPoints = [];
				for ( var i in xyResults) {
					var xyResult = xyResults[i];
					if (xyResult.error == 0) {
						var point = new BMap.Point(xyResult.x, xyResult.y);
						callbackPoints.push(point);
					} else {
						callbackPoints.push(null);
					}
				}
				callback && callback(callbackPoints);
			}

			var url = xyUrl + "&x=" + xs.join(",") + "&y=" + ys.join(",") + "&callback=BMap.Convertor." + callbackName;
			// 动态创建script标签
			load_script(url);
			xs = [];
			ys = [];
		}

		for ( var index in points) {
			if (index % maxCnt == 0 && index != 0) {
				send();
			}
			xs.push(points[index].lng);
			ys.push(points[index].lat);
			if (index == points.length - 1) {
				send();
			}
		}
	}

	window.BMap = window.BMap || {};
	BMap.Convertor = BMap.Convertor || {};
	BMap.Convertor.transMore = transMore;
})();
