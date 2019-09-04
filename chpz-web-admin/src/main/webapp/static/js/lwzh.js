if (!Array.indexOf) {
	Array.prototype.indexOf = function(obj) {
		for (var i = 0; i < this.length; i++) {
			if (this[i] == obj) {
				return i;
			}
		}
		return -1;
	}
}

var lwzh = lwzh || {};

// return /lwzh
lwzh.getContextPath = function() {
	return lwzh.contextPath;
};

lwzh.getLocationArgs = function() {
	var args = {};
	var query = window.location.search.substring(1);
	var pairs = query.split("&");
	for (var i = 0; i < pairs.length; i++) {
		var pos = pairs[i].indexOf("=");
		if (pos != -1) {
			var argname = pairs[i].substring(0, pos);
			var value = pairs[i].substring(pos + 1);
			args[argname] = value;
		}
	}
	return args;
};

lwzh.getLocationArgByKey = function(key) {
	var args = lwzh.getLocationArgs();
	if (args) {
		return args[key];
	} else {
		return null;
	}
};

lwzh.gotoHttp = function(url) {
	var href = "http://" + window.location.host + lwzh.getContextPath() + url;
	window.location.href = href;
};

lwzh.gotoHttps = function(url) {
	var href = "https://" + window.location.host + lwzh.getContextPath() + url;
	window.location.href = href;
};

lwzh.gotoTop = function() {
	$("html,body").animate({
		scrollTop : 0
	}, "normal");
};

lwzh.alert = function(msg) {
	alert(msg);
};

lwzh.confirm = function(msg) {
	return confirm(msg);
};

lwzh.isNullOrEmpty = function(str) {
	if (str == '' || str == null || str == undefined || str == 'null') {
		return true;
	} else {
		return false;
	}
};

lwzh.parseFloat = function(t) {
	var fv = parseFloat(t);
	if (isNaN(fv)) {
		return "";
	} else {
		return parseFloat(t).toFixed(1);
	}
}

lwzh.formatDate = function(t) {
	if (lwzh.isNullOrEmpty(t)) {
		return "";
	} else {
		return new Date(t).format("{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}");
	}
}

lwzh.formatPara = function(v, u) {
	var vs = v.split(",");
	var str = "";
	for (var i = 0; i < vs.length; i++) {
		if (!lwzh.isNullOrEmpty(vs[i])) {
			str += vs[i] + u + "&nbsp;";
		}
	}
	return str;
}

lwzh.getValidatorErrors = function(validator) {
	var msgs = [];
	if (validator.errorList) {
		for ( var i in validator.errorList) {
			var error = validator.errorList[i];
			var $ele = $(error.element);
			var alt = $ele.attr("alt");
			var msg = (alt ? alt : "") + " " + error.message;
			msgs.push(msg);
		}
	}
	return msgs.join("\r");
};

lwzh.captcha = function($div, width, height) {
	var src = lwzh.getContextPath() + "/echo/captcha?width=" + width + "&height=" + height;
	var refreshImg = function() {
		$img.attr("src", src + "&_=" + new Date().getTime());
	};

	var $img = $("<img style='cursor: pointer;' />");
	$img.attr("src", src + "&_=" + new Date().getTime());
	$img.click(refreshImg);

	var $refresh = $("<span class='glyphicon glyphicon-refresh' style='cursor: pointer;' />");
	$refresh.click(refreshImg);

	$div.children().remove();
	$div.append($img);
	$div.append($refresh);
};

lwzh.raty = function($div, options) {
	var defaults = {
		cancelOff : lwzh.getContextPath() + '/common/js/raty/images/cancel-off.png',
		cancelOn : lwzh.getContextPath() + '/common/js/raty/images/cancel-on.png',
		starHalf : lwzh.getContextPath() + '/common/js/raty/images/star-half.png',
		starOff : lwzh.getContextPath() + '/common/js/raty/images/star-off.png',
		starOn : lwzh.getContextPath() + '/common/js/raty/images/star-on.png',
		score : 5,
		hints : [ '非常差', '差', '一般', '好', '非常好' ],
		click : function(score, evt) {
			$(this).prev("input").val(score);
		}
	};
	options = $.extend(true, {}, defaults, options);
	$div.raty(options);
	$div.each(function() {
		$(this).prev("input").val(options.score);
	});
};

lwzh.qrcode = function($wrapper, text, icon, typeNumber, errorCorrectLevel) {
	var qr = qrcode(typeNumber || 10, errorCorrectLevel || "M");
	qr.addData(text);
	qr.make();

	var $tag = $(qr.createImgTag());
	var $icon = $('<img src="' + (icon || '/favicon.ico') + '" />');

	var tag_size = $tag.attr("width");
	var icon_size = tag_size / 4;
	var icon_left = -((tag_size - icon_size) / 2 + icon_size);
	var icon_bottom = (tag_size - icon_size) / 2;
	icon_bottom = 0;

	$icon.css("width", icon_size + "px");
	$icon.css("height", icon_size + "px");
	$icon.css("margin-left", icon_left + "px");
	$icon.css("margin-bottom", icon_bottom + "px");

	$wrapper.append($tag);
	$wrapper.append($icon);
};

lwzh.dialogWindowMap = {};
lwzh.dialogMap = {};

lwzh.openDialog = function(id, url, option) {
	var modalId = "lwzh_modal_" + id;
	option = $.extend({
		theWindow : window
	}, option);

	var theWindow = option.theWindow;
	var $theWindow = $(theWindow);
	var $theDocument = $(theWindow.document);

	window.top.lwzh.dialogWindowMap[modalId] = theWindow;

	option = $.extend({
		title : "",
		width : ($theWindow.width() * 0.9) + "px",
		height : ($theWindow.height() * 0.9) + "px"
	}, option);

	var iframeId = modalId + "_iframe";
	var modalDialogStyle = "width: " + option.width + "; height: " + option.height + ";";

	var html = '';
	html += '<div class="modal" id="' + modalId + '" tabindex="-1">';
	html += '<div class="modal-dialog" style="' + modalDialogStyle + '">';
	html += '<div class="modal-content" style="width: 100%; height: 100%;">';
	html += '<div class="modal-header">';
	html += '<button type="button" class="close" onclick="lwzh.closeDialog(\'' + id + '\');">&times;</button>';
	html += '<h4 class="modal-title">';
	html += option.title;
	html += '</h4>';
	html += '</div>';
	html += '<div class="modal-body" style="width: 100%; height: 90%;">';
	html += '<iframe id="' + iframeId + '" src="' + url + '" width="100%" height="100%" frameborder="no" border="0"></iframe>';
	html += '</div>';
	// html += '<div class="modal-footer">';
	// html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '<div class="modal-backdrop in" id="modal_backdrop_' + modalId + '"></div>';
	$("body", $theDocument).append(html);

	var $theModal = $("#" + modalId, $theDocument);
	var $theBackdrop = $("#modal_backdrop_" + modalId, $theDocument);
	var modalObj = $theModal.modal({
		backdrop : false
	});
	$theModal.on("shown.bs.modal", function() {
	});
	$theModal.on("hidden.bs.modal", function() {
		if (option.onCloseCallback && $.type(option.onCloseCallback) == "function") {
			option.onCloseCallback(theWindow.lwzhDialogOutData);
		}
		$theModal.remove();
		$theBackdrop.remove();
	});
	theWindow.lwzh.dialogMap[modalId] = modalObj;

	var $theIframe = $("#" + iframeId, $theDocument);
	var contentWindow = $theIframe[0].contentWindow;
	contentWindow.lwzhDialogId = id;
	contentWindow.lwzhDialogInData = option.inData;
};

lwzh.closeDialog = function(id, option) {
	var modalId = "lwzh_modal_" + id;
	option = $.extend({}, option);

	var theWindow = window.top.lwzh.dialogWindowMap[modalId];
	var $theWindow = $(theWindow);
	var $theDocument = $(theWindow.document);

	delete window.top.lwzh.dialogWindowMap[modalId];

	theWindow.lwzhDialogOutData = option.outData;
	var modalObj = theWindow.lwzh.dialogMap[modalId];
	var bs_modal = modalObj.data("bs.modal");
	bs_modal.hide();
};

lwzh.bootstrapPagination = function($page, curPage, maxPage, onClickPage, option) {
	option = $.extend({
		show_page_size : 5
	}, option);

	curPage = parseInt(curPage);
	maxPage = parseInt(maxPage);
	var show_page_size = parseInt(option.show_page_size);

	var leftPages = [];
	var rightPages = [];
	for (var i = 1; i < show_page_size; i++) {
		if ((curPage - i) > 0) {
			leftPages.unshift(curPage - i);
		}
		if ((curPage + i) <= maxPage) {
			rightPages.push(curPage + i);
		}
	}
	leftPages.push(curPage);
	var pages = leftPages.concat(rightPages);

	var leftPage = (curPage - 1) > 0 ? (curPage - 1) : curPage;
	var rightPage = (curPage + 1) > maxPage ? maxPage : (curPage + 1);

	var html = '';
	html += '<ul class="pagination">';
	if (curPage == leftPage) {
		html += '<li class="disabled">';
		html += '<a href="javascript:void(0);" onclick="">&laquo;</a>';
		html += '</li>';
	} else {
		html += '<li>';
		html += '<a href="javascript:void(0);" onclick="' + onClickPage + '(' + leftPage + ')' + '">&laquo;</a>';
		html += '</li>';
	}
	for ( var i in pages) {
		var page = pages[i];
		if (page == curPage) {
			html += '<li class="active">';
			html += '<a href="javascript:void(0);" onclick="">' + page + '</a>';
			html += '	</li>';
		} else {
			html += '<li>';
			html += '<a href="javascript:void(0);" onclick="' + onClickPage + '(' + page + ')' + '">' + page + '</a>';
			html += '	</li>';
		}
	}
	if (curPage == rightPage) {
		html += '<li class="disabled">';
		html += '<a href="javascript:void(0);" onclick="">&raquo;</a>';
		html += '</li>';
	} else {
		html += '<li>';
		html += '<a href="javascript:void(0);" onclick="' + onClickPage + '(' + rightPage + ')' + '">&raquo;</a>';
		html += '</li>';
	}
	html += '</ul>';

	$page.append(html);
};

lwzh.expandZTreeNode = function(zTree, node, level) {
	if (level > 0) {
		level--;
		zTree.expandNode(node, true, false, false, false);
		if (node.children) {
			for (var i = 0; i < node.children.length; i++) {
				var child = node.children[i];
				lwzh.expandZTreeNode(zTree, child, level);
			}
		}
	}
};

lwzh.expandZTree = function(zTree, level) {
	if (level > 0) {
		var nodes = zTree.getNodes();
		for (var i = 0; i < nodes.length; i++) {
			var node = nodes[i];
			lwzh.expandZTreeNode(zTree, node, level);
		}
	}
};

lwzh.toJSON = function(obj) {
	if (obj) {
		return $.toJSON(obj);
	} else {
		return "{}";
	}
};

lwzh.parseJSON = function(json) {
	if (json) {
		return $.parseJSON(json);
	} else {
		return {};
	}
};

lwzh.param = function(obj) {
	if (obj) {
		return $.param(obj);
	} else {
		return "";
	}
};

lwzh.merge = function() {
	var ret = {};
	var args = arguments;
	for (var i = 0; i < args.length; i++) {
		var arg = args[i];
		if (arg) {
			var type = $.type(arg);
			if (type == "object") {
				for ( var key in arg) {
					var value = arg[key];
					if (ret.hasOwnProperty(key)) {
						var v = ret[key];
						if ($.type(v) == "array") {
							v.push(value);
						} else {
							var array = [];
							array.push(v);
							array.push(value);
							ret[key] = array;
						}
					} else {
						ret[key] = value;
					}
				}
			} else {
				lwzh.alert("Illegal arg：" + arg + ", type=" + type);
				return false;
			}
		}
	}
	return ret;
};

lwzh.collectForm = function(form) {
	var type = $.type(form);
	var forms = [];
	if (type == "string") {
		forms.push(form);
	} else if (type == "array") {
		forms = form;
	} else {
		lwzh.alert("Illegal form：" + form + ", type=" + type);
		return false;
	}

	var ret = {};
	$.each(forms, function(index, fromId) {
		var $form = $("#" + fromId);
		$("input,select,textarea", $form).each(function(index, ele) {
			var $ele = $(ele);
			var type = $ele.attr("type");
			var valid = true;
			if (type == "checkbox" || type == "radio") {
				valid = $ele.is(":checked");
			}
			if (valid) {
				var key = $ele.attr("name");
				var value = $ele.val();
				if (key) {
					if (ret.hasOwnProperty(key)) {
						var v = ret[key];
						if ($.type(v) == "array") {
							v.push(value);
						} else {
							var array = [];
							array.push(v);
							array.push(value);
							ret[key] = array;
						}
					} else {
						ret[key] = value;
					}
				}
			}
		});
	});
	return ret;
};

lwzh.setForm = function(form, json) {
	if ($.type(json) == "string") {
		json = lwzh.parseJSON(json);
	}

	var jsonType = $.type(json);
	if (jsonType != "object") {
		lwzh.alert("Illegal json：" + json + ", type=" + jsonType);
		return false;
	}

	var type = $.type(form);
	var forms = [];
	if (type == "string") {
		forms.push(form);
	} else if (type == "array") {
		forms = form;
	} else {
		lwzh.alert("Illegal form：" + form + ", type=" + type);
		return false;
	}

	$.each(forms, function(index, fromId) {
		var $form = $("#" + fromId);
		$("input,select,textarea", $form).each(function(index, ele) {
			var $ele = $(ele);
			var name = $ele.attr("name");
			if (name && json.hasOwnProperty(name)) {
				var value = json[name];
				var type = $ele.attr("type");
				if (type == "checkbox" || type == "radio") {
					if (value == $ele.attr("value")) {
						$ele.attr("checked", "checked");
					} else {
						$ele.removeAttr("checked");
					}
				} else {
					$ele.val(value);
				}
			}
		});
	});
};

lwzh.clearForm = function(form) {
	var type = $.type(form);
	var forms = [];
	if (type == "string") {
		forms.push(form);
	} else if (type == "array") {
		forms = form;
	} else {
		lwzh.alert("Illegal form：" + form + ", type=" + type);
		return false;
	}

	$.each(forms, function(index, fromId) {
		var $form = $("#" + fromId);
		$("input,select,textarea", $form).each(function(index, ele) {
			var $ele = $(ele);
			var type = $ele.attr("type");
			if (type == "checkbox" || type == "radio") {
				$ele.removeAttr("checked");
			}
			if (type == "button") {
			} else {
				$ele.val("");
			}
		});
	});
};

lwzh.ajax = function(settings) {
	var url = settings.url;
	if (!url) {
		lwzh.alert("Illegal url：" + url);
		return false;
	}
	if (url.charAt(0) != "/") {
		url = "/" + url;
	}
	url = lwzh.getContextPath() + url;

	var type = settings.type;
	if (!type) {
		type = "POST";
	}

	var async = settings.async;
	if (async == undefined || async == null) {
		async = true;
	}

	var parseJSON = settings.parseJSON;
	if (parseJSON == undefined || parseJSON == null) {
		parseJSON = true;
	}

	var reqMap = {};
	if (settings.form) {
		var formMap = lwzh.collectForm(settings.form);
		reqMap = lwzh.merge(reqMap, formMap);
	}
	if (settings.param) {
		reqMap = lwzh.merge(reqMap, settings.param);
	}

	var data = reqMap;

	var timeout = settings.timeout;
	if (!timeout) {
		timeout = 15000;
	}

	var loading = settings.loading;
	if (!loading) {
		loading = "none";
	}

	var jbox = null;
	if (loading == "none") {
	} else if (loading == "modal") {
		var loadingHtml = '<img src="' + lwzh.getContextPath() + "/static/image/indicator.gif" + '" alt="载入中..." />';
		jbox = new jBox("Modal", {
			overlay : true,
			autoClose : false,
			closeOnClick : false,
			content : loadingHtml
		});
	} else if (loading == "notice") {
		var loadingHtml = '<img src="' + lwzh.getContextPath() + "/static/image/indicator.gif" + '" alt="载入中..." />';
		jbox = new jBox("Notice", {
			overlay : false,
			autoClose : false,
			closeOnClick : "box",
			content : loadingHtml
		});
	}
	if (jbox) {
		jbox.open();
	}

	var ajaxSettings = {
		url : url,
		type : type,
		async : async,
		data : data,
		dataType : "text",
		timeout : timeout
	};
	$.ajax(ajaxSettings).done(function(respData, textStatus, jqXHR) {
		if (jbox) {
			jbox.close();
		}
		if (settings.callback) {
			if (respData && parseJSON) {
				try {
					respData = $.evalJSON(respData);
				} catch (e) {
				}
			}
			var t = $.type(settings.callback);
			if (t == "function") {
				settings.callback(respData);
			} else if (t == "array") {
				for ( var i in settings.callback) {
					var callback_i = settings.callback[i];
					if ($.type(callback_i) == "function") {
						callback_i(respData);
					}
				}
			}
		}
	}).fail(function(jqXHR, textStatus, errorThrown) {
	});
};

lwzh.getAttributeValueByCategoryCodeAndAttributeCode_cache = {};

lwzh.getAttributeValueByCategoryCodeAndAttributeCode = function(category_code, attribute_code) {
	var key = category_code + "/" + attribute_code;
	if (lwzh.getAttributeValueByCategoryCodeAndAttributeCode_cache[key]) {
		return lwzh.getAttributeValueByCategoryCodeAndAttributeCode_cache[key];
	}

	lwzh.ajax({
		url : "/attribute/getAttributeValueByCategoryCodeAndAttributeCode.json",
		async : false,
		param : {
			category_code : category_code,
			attribute_code : attribute_code
		},
		callback : function(json) {
			switch (json.code) {
			case 0:
				var map = {};
				for ( var i in json.attributeValueList) {
					var attributeValue = json.attributeValueList[i];
					map[attributeValue.attribute_value] = attributeValue.info;
				}
				lwzh.getAttributeValueByCategoryCodeAndAttributeCode_cache[key] = map;
				break;
			default:
				break;
			}
		}
	});

	return lwzh.getAttributeValueByCategoryCodeAndAttributeCode_cache[key];
}

lwzh.convertValueByAttributeValue = function(category_code, attribute_code, theValue) {
	var map = lwzh.getAttributeValueByCategoryCodeAndAttributeCode(category_code, attribute_code);
	return map[theValue];
}

lwzh.buildSelectByAttributeValue = function(category_code, attribute_code, $select, selectValue) {
	var map = lwzh.getAttributeValueByCategoryCodeAndAttributeCode(category_code, attribute_code);

	var html = '';
	for ( var k in map) {
		html += '<option value="' + k + '"';
		if (k == selectValue) {
			html += ' selected';
		}
		html += '>' + map[k] + '</option>';
	}
	$select.append(html);
}

lwzh.buildRadioByAttributeValue = function(category_code, attribute_code, $wrapper, name, selectValue) {
	var map = lwzh.getAttributeValueByCategoryCodeAndAttributeCode(category_code, attribute_code);
	for ( var k in map) {
		var html = '';
		html += '<input type="radio" name="' + name + '" value="' + k + '"';
		if (k == selectValue) {
			html += ' checked';
		}
		html += '/>' + map[k];
		html += '&nbsp;&nbsp;';
		$wrapper.append(html);
	}
}

lwzh.getSubCategoryByCategoryCode_cache = {};

lwzh.getSubCategoryByCategoryCode = function(category_code) {
	var key = category_code;
	if (lwzh.getSubCategoryByCategoryCode_cache[key]) {
		return lwzh.getSubCategoryByCategoryCode_cache[key];
	}

	lwzh.ajax({
		url : "/category/getSubCategoryByCategoryCode.json",
		async : false,
		param : {
			category_code : category_code
		},
		callback : function(json) {
			switch (json.code) {
			case 0:
				var map = {};
				for ( var i in json.categoryList) {
					var category = json.categoryList[i];
					map[category.code] = category.name;
				}
				lwzh.getSubCategoryByCategoryCode_cache[key] = map;
				break;
			default:
				break;
			}
		}
	});

	return lwzh.getSubCategoryByCategoryCode_cache[key];
}

lwzh.convertValueByCategory = function(category_code, theValue) {
	var map = lwzh.getSubCategoryByCategoryCode(category_code);
	return map[theValue];
}

lwzh.buildSelectByCategory = function(category_code, $select, selectValue) {
	var map = lwzh.getSubCategoryByCategoryCode(category_code);

	var html = '';
	for ( var k in map) {
		html += '<option value="' + k + '"';
		if (k == selectValue) {
			html += ' selected';
		}
		html += '>' + map[k] + '</option>';
	}
	$select.append(html);
}

lwzh.buildRadioByCategory = function(category_code, $wrapper, name, selectValue) {
	var map = lwzh.getSubCategoryByCategoryCode(category_code);
	for ( var k in map) {
		var html = '';
		html += '<input type="radio" name="' + name + '" value="' + k + '"';
		if (k == selectValue) {
			html += ' checked';
		}
		html += '/>' + map[k];
		html += '&nbsp;&nbsp;';
		$wrapper.append(html);
	}
}

lwzh.dateToString = function(myDate) {
	var second = 1000;
	var minutes = second * 60;
	var hours = minutes * 60;
	var days = hours * 24;
	var months = days * 30;
	var years = days * 365;

	if (isNaN(myDate)) {
		return null;
	}

	var nowtime = new Date();
	var longtime = nowtime.getTime() - myDate.getTime();
	var showtime = 0;
	if (longtime > months * 2) {
		return myDate.format("{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}");
	} else if (longtime > months) {
		return "1个月前";
	} else if (longtime > days * 7) {
		return ("1周前");
	} else if (longtime > days) {
		return (Math.floor(longtime / days) + "天前");
	} else if (longtime > hours) {
		return (Math.floor(longtime / hours) + "小时前");
	} else if (longtime > minutes) {
		return (Math.floor(longtime / minutes) + "分钟前");
	} else if (longtime > second) {
		return (Math.floor(longtime / second) + "秒前");
	} else {
		return "刚刚";
	}
};