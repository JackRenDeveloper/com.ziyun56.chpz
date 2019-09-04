var dvs = dvs || {};

dvs.uuid = function() {
	// xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
	var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
	return uuid;
};

// return /dvs
dvs.getContextPath = function() {
	return dvs.contextPath;
};

dvs.getLocationArgs = function() {
	var args = {};
	var query = window.location.search.substring(1);
	var pairs = query.split("&");
	for (var i = 0; i < pairs.length; i++) {
		var pos = pairs[i].indexOf("=");
		if (pos != -1) {
			var argname = pairs[i].substring(0, pos);
			var value = pairs[i].substring(pos + 1);
			value = decodeURI(value);
			args[argname] = value;
		}
	}
	return args;
};

dvs.getLocationArgByKey = function(key) {
	var args = dvs.getLocationArgs();
	if (args) {
		return args[key];
	} else {
		return null;
	}
};

dvs.gotoUrl = function(url) {
	if (url.charAt(0) != "/") {
		url = "/" + url;
	}
	url = dvs.getContextPath() + url;
	window.location.href = url;
};

dvs.gotoHttp = function(url) {
	var href = "http://" + window.location.host + dvs.getContextPath() + url;
	window.location.href = href;
};

dvs.gotoHttps = function(url) {
	var href = "https://" + window.location.host + dvs.getContextPath() + url;
	window.location.href = href;
};

dvs.gotoTop = function() {
	$("html,body").animate({
		scrollTop : 0
	}, "normal");
};

dvs.alert = function(msg) {
	alert(msg);
};

dvs.confirm = function(msg) {
	return confirm(msg);
};

dvs.getValidatorErrors = function(validator) {
	var msgs = [];
	if (validator.errorList) {
		for (var i = 0; i < validator.errorList.length; i++) {
			var error = validator.errorList[i];
			var $ele = $(error.element);
			var alt = $ele.attr("alt");
			var msg = (alt ? alt : "") + " " + error.message;
			msgs.push(msg);
		}
	}
	return msgs.join("\r");
};

dvs.captcha = function($div, width, height) {
	var src = dvs.getContextPath() + "/echo/captcha?width=" + width + "&height=" + height;
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

dvs.raty = function($div, options) {
	var hints = [ "非常差", "差", "一般", "好", "非常好" ];
	var score = parseInt($div.attr("score"));
	for (var i = 0; i < hints.length; i++) {
		hints[i] = "得分:" + score + " " + hints[i];
	}
	score = score / 20;

	var defaults = {
		cancelOff : dvs.getContextPath() + "/static/js/raty/images/cancel-off.png",
		cancelOn : dvs.getContextPath() + "/static/js/raty/images/cancel-on.png",
		starHalf : dvs.getContextPath() + "/static/js/raty/images/star-half.png",
		starOff : dvs.getContextPath() + "/static/js/raty/images/star-off.png",
		starOn : dvs.getContextPath() + "/static/js/raty/images/star-on.png",
		score : score,
		hints : hints,
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

dvs.qrcode = function($wrapper, text, icon, typeNumber, errorCorrectLevel) {
	var qr = qrcode(typeNumber || 10, errorCorrectLevel || "Q");
	qr.addData(text);
	qr.make();

	var $tag = $(qr.createImgTag(2, 8));
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

dvs.initFileUploader = function($picker, $input, $status, $preview, option) {
	option = $.extend({
		alwaysUpdateInputValue : true,
		useGridFS : true,
		uploadUrl : "/fs/uploadFile.json",
		downloadUrl : null
	}, option);

	if (option.useGridFS) {
		option.uploadUrl = "/fs/uploadFileToGridFS.json";
		option.downloadUrl = "/gfs/";
	}

	var reqMap = {};
	if (option.form) {
		var formMap = dvs.collectForm(option.form);
		reqMap = dvs.merge(reqMap, formMap);
	}
	if (option.param) {
		reqMap = dvs.merge(reqMap, option.param);
	}
	
	var updatePreview = function() {
		if (!$preview) {
			return;
		}

		$preview.html("");
		var imgs = $input.val().split(",");
		var input_id = $input.attr("id");
		
		
		for (var i = 0; i < imgs.length; i++) {
			var img = imgs[i];
			if (option.downloadUrl) {
				if ("" == img) {
					var html = '<div style="position: relative;width: 100px; height: 100px;"><img src="' + img + '" style="width: 100px; height: 100px;" /></div>';
					// $preview.append(html);
				}else{
					var id = null;
					id = dvs.uuid();
					var html = '<div id="'+id+'" style="position: relative;width: 100px; height: 100px;"><i class="fa fa-fw fa-close" style="position: absolute;right:0" onclick="dvs.click(\''+img+'\',\''+imgs+'\',\''+input_id+'\',\''+id+'\');"></i><img id="' + img + '" src="' + img + '" style="width: 100px; height: 100px;" /></div>';
					$preview.append(html);
				}
			} else {
				if (img && "" != img) {
					var html = '<div style="position: relative;width: 100px; height: 100px;"><i style="position: absolute;right:0"></i><img src="' + img + '" style="width: 100px; height: 100px;" /></div>';
					$preview.append(html);
				}
			}
		}
	}
	updatePreview();

	var uploader = WebUploader.create({
		swf : dvs.getContextPath() + "/static/js/webuploader/Uploader.swf",
		server : dvs.getContextPath() + option.uploadUrl,
		formData : reqMap,
		auto : true,
		pick : $picker,
		duplicate : true
	});

	uploader.on("fileQueued", function(file) {
		$status.text("加入队列");
	});

	uploader.on("uploadBeforeSend", function(object, data, headers) {
		$status.text("开始上传");
	});

	uploader.on("uploadProgress", function(file, percentage) {
		var per = percentage * 100 + "";
		per = per.substring(0, 5);
		$status.text(per + "%");
	});

	uploader.on("uploadSuccess", function(file, response) {
		$status.text("上传成功");
		var val = $input.val();

		if (!option.downloadUrl) {
			if (val && !option.alwaysUpdateInputValue) {
				val = val + "," + response.fileList.join(",");
			} else {
				val = response.fileList.join(",");
			}
		} else {
			if (val && !option.alwaysUpdateInputValue) {
				val = val + "," + option.downloadUrl + response.fileList.join(",");
			} else {
				val = option.downloadUrl + response.fileList.join(",");
			}
		}
		$input.val(val);
		updatePreview();
//		console.log(uploader.getFiles());
//		var file = uploader.getFiles();
	});

	uploader.on("uploadError", function(file, reason) {
		$status.text("上传失败：" + reason);
	});
};

Array.prototype.remove = function(val) {
	var index = this.indexOf(val);
	if (index > -1) {
		this.splice(index, 1);
	}
};
dvs.click = function(img,imgs,input_id,id){
	document.getElementById(img).setAttribute("src","");
	var input_values = $("#"+input_id).val().split(",");
	input_values.remove(img);
	$("#"+input_id).val(input_values.join(","));
	var $imgThumb = $('#' + id);
	$imgThumb.remove();
}

dvs.initUeditor = function(editor_id, option) {
	option = $.extend({
		toolbars : [ [ 'fullscreen', 'source', '|', 'undo', 'redo', '|', 'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript',
				'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor',
				'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|', 'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
				'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|', 'directionalityltr', 'directionalityrtl', 'indent', '|', 'justifyleft',
				'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|', 'link', 'unlink', 'anchor', '|',
				'imagenone', 'imageleft', 'imageright', 'imagecenter', '|', 'simpleupload', 'insertimage', 'emotion', 'scrawl', 'insertvideo',
				'music', 'attachment', 'map', 'gmap', 'insertframe', 'insertcode', 'webapp', 'pagebreak', 'template', 'background', '|',
				'horizontal', 'date', 'time', 'spechars', 'snapscreen', 'wordimage', '|', 'inserttable', 'deletetable', 'insertparagraphbeforetable',
				'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows',
				'splittocols', 'charts', '|', 'print', 'preview', 'searchreplace', 'help', 'drafts' ] ],
		elementPathEnabled : false,
		wordCount : true,
		maximumWords : 100000
	}, option);

	var ue_id = editor_id + "_" + new Date().getTime();

	var $editor = $("#" + editor_id);
	var content = "";
	if ($editor.is("input") || $editor.is("textarea")) {
		content = $editor.val();
	} else {
		content = $editor.text();
	}

	var html = '<script type="text/plain" id="' + ue_id + '" name="' + editor_id + '">' + content + '</script>';
	$("#" + editor_id).replaceWith(html);

	var ue = UE.getEditor(ue_id, option);
	return ue_id;
};

dvs.initSearchFields = function(id, option) {
	option = $.extend({
		fields : {},
		conditions : {
			eq : "等于",
			ne : "不等于",
			gt : "大于",
			gte : "大于等于",
			lt : "小于",
			lte : "小于等于",
			regex : "正则表达式",
			// ct : "包含",
			// nct : "不包含",
			"in" : "在...中",
			nin : "不在...中"
		},
		values : {
			"#var_me#" : "#我#",
			"#var_my_enterprise#" : "#我的企业#"
		},
		value_types : {
			string : "字符串",
			num : "数字",
			bool : "布尔值",
			date : "日期",
			time : "时间",
			datetime : "日期时间"
		},
		data : {
			field : [],
			condition : [],
			value : []
		}
	}, option);

	$("#" + id).html("");
	var field_id = "search_field_" + dvs.uuid();
	var fields = option.fields;
	var conditions = option.conditions;
	var values = option.values;
	var value_types = option.value_types;

	var html = '';
	html += '<div class="col-xs-12 dvs-search-field" id="' + field_id + '">';

	html += '<div class="col-xs-3">';
	html += '<select class="form-control" name="field">';
	for ( var key in fields) {
		var value = fields[key];
		html += '<option value="' + key + '">' + value + '</option>';
	}
	html += '</select>';
	html += '</div>';

	html += '<div class="col-xs-3">';
	html += '<select class="form-control" name="condition">';
	for ( var key in conditions) {
		var value = conditions[key];
		html += '<option value="' + key + '">' + value + '</option>';
	}
	html += '</select>';
	html += '</div>';

	html += '<div class="col-xs-3">';
	html += '<input class="form-control" type="text" name="value" value="" />';
	html += '<input class="form-control" type="hidden" name="value_type" value="" />';
	html += '</div>';

	html += '<div class="col-xs-3">';
	html += '<div class="btn-group">';
	// html += '<button type="button" class="btn btn-default" onclick=""><i class="fa fa-user"></i></button>';

	html += '<div class="btn-group">';
	html += '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">';
	html += '变量 <span class="caret"></span>';
	html += '</button>';
	html += '<ul class="dropdown-menu">';
	for ( var key in values) {
		var value = values[key];
		var onclick = "$('#" + field_id + " input[name=value]').val('" + key + "');";
		onclick += "$(this).parent().parent().prev().text('" + value + "');";
		html += '<li>';
		html += '<a class="field_id" href="javascript:;" onclick="' + onclick + '">' + value + '</a>';
		html += '</li>';
	}
	html += '</ul>';
	html += '</div>';

	html += '<div class="btn-group">';
	html += '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">';
	html += '类型 <span class="caret"></span>';
	html += '</button>';
	html += '<ul class="dropdown-menu">';
	for ( var key in value_types) {
		var value = value_types[key];
		var onclick = "$('#" + field_id + " input[name=value_type]').val('" + key + "');";
		onclick += "$(this).parent().parent().prev().text('" + value + "');";
		onclick += "$('#" + field_id + " input[name=value_type]').change();"
		html += '<li>';
		html += '<a class="field_id" href="javascript:;" onclick="' + onclick + '">' + value + '</a>';
		html += '</li>';
	}
	html += '</ul>';
	html += '</div>';

	html += '<button type="button" class="btn btn-success field_id" onclick="dvs.cloneSearchField(\'' + field_id
			+ '\');"><i class="fa fa-plus"></i></button>';
	html += '<button type="button" class="btn btn-danger field_id" onclick="dvs.removeSearchField(\'' + field_id
			+ '\');"><i class="fa fa-minus"></i></button>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	$("#" + id).append(html);
	dvs.onSearchFieldValueTypeChange(field_id);

	var data = option.data;
	if ($.type(data) == "string") {
		data = dvs.parseJSON(data);
	}

	var data_field = data.field;
	var data_condition = data.condition;
	var data_value = data.value;

	if (data_field.length > 0) {
		for (var i = 0; i < data_field.length - 1; i++) {
			dvs.cloneSearchField(field_id);
		}
		dvs.setSearchFields(id, data);
	}
};

dvs.onSearchFieldValueTypeChange = function(field_id) {
	var $value = $("#" + field_id + " input[name='value']");
	var $value_type = $("#" + field_id + " input[name='value_type']");
	$value_type.change(function() {
		$value.datetimepicker("destroy");

		var type = $value_type.val();
		if (type == "string") {
		} else if (type == "num") {
		} else if (type == "bool") {
		} else if (type == "date") {
			$.datetimepicker.setLocale("ch");
			$value.datetimepicker({
				datepicker : true,
				timepicker : false,
				format : "Y-m-d"
			});
		} else if (type == "time") {
			$.datetimepicker.setLocale("ch");
			$value.datetimepicker({
				datepicker : false,
				timepicker : true,
				format : 'H:i'
			});
		} else if (type == "datetime") {
			$.datetimepicker.setLocale("ch");
			$value.datetimepicker({
				datepicker : true,
				timepicker : true,
				format : "Y-m-d H:i"
			});
		} else {
		}
	});
};

dvs.cloneSearchField = function(field_id) {
	var $clone = $("#" + field_id).clone();
	var new_field_id = "search_field_" + dvs.uuid();
	$clone.attr("id", new_field_id);
	$clone.find(".field_id").each(function(index, ele) {
		var $ele = $(ele);
		var onclick = $ele.attr("onclick");
		if (onclick.indexOf(field_id) > 0) {
			var new_onclick = onclick.replace(new RegExp(field_id, "gm"), new_field_id);
		}
		$ele.attr("onclick", new_onclick);
	});
	$("#" + field_id).after($clone);
	dvs.clearSearchFields(new_field_id);
	dvs.onSearchFieldValueTypeChange(new_field_id);
	return new_field_id;
};

dvs.removeSearchField = function(field_id) {
	$("#" + field_id).remove();
};

dvs.collectSearchFields = function(id) {
	var ret = {};
	$(".dvs-search-field", $("#" + id)).each(function(index, ele) {
		var $ele = $(ele);
		$("input,select,textarea", $ele).each(function(index, ele) {
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
						var array = ret[key];
						array.push(value);
					} else {
						ret[key] = [ value ];
					}
				}
			}
		});
	});
	return ret;
};

dvs.clearSearchFields = function(id) {
	$("input", $("#" + id)).each(function(index, ele) {
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
};

dvs.setSearchFields = function(id, data) {
	$(".dvs-search-field", $("#" + id)).each(function(index, ele) {
		var $ele = $(ele);
		var field_id = $ele.attr("id");
		dvs.setForm(field_id, {
			field : (data.field && data.field.length > index) ? data.field[index] : "",
			condition : (data.condition && data.condition.length > index) ? data.condition[index] : "",
			value : (data.value && data.value.length > index) ? data.value[index] : "",
			value_type : (data.value_type && data.value_type.length > index) ? data.value_type[index] : ""
		});
	});
	$("#" + id + " input[name='value_type']").change();
};

dvs.buildPropsHtml = function buildHtml(id, props_id, key, value) {
	var html = '';
	html += '<div class="col-xs-12" id="' + props_id + '">';
	html += '<div class="col-xs-4"><input class="form-control" type="text" name="props_key" value="' + key + '" placeholder="Key" /></div>';
	html += '<div class="col-xs-4"><input class="form-control" type="text" name="props_value" value="' + value + '" placeholder="Value" /></div>';
	html += '<div class="col-xs-4"><div class="btn-group">';
	html += '<button type="button" class="btn btn-success field_id" onclick="dvs.addProps(\'' + id + '\', \'' + props_id
			+ '\');"><i class="fa fa-plus"></i></button>';
	html += '<button type="button" class="btn btn-danger field_id" onclick="dvs.deleteProps(\'' + props_id
			+ '\');"><i class="fa fa-minus"></i></button>';
	html += '</div></div>';
	html += '</div>';
	return html;
};

dvs.initProps = function(id, data) {
	var html = '';
	if (data) {
		for ( var key in data) {
			var value = data[key];
			var props_id = "props_" + dvs.uuid();
			html += dvs.buildPropsHtml(id, props_id, key, value);
		}
	} else {
		var props_id = "props_" + dvs.uuid();
		html += dvs.buildPropsHtml(id, props_id, "", "");
	}
	$("#" + id).html(html);
};

dvs.addProps = function(id, clone_props_id) {
	var props_id = "props_" + dvs.uuid();
	var html = dvs.buildPropsHtml(id, props_id, "", "");
	$("#" + id).append(html);
};

dvs.deleteProps = function(props_id) {
	$("#" + props_id).remove();
};

dvs.addModalCover = function(zIndex) {
	var $div = $('<div style="overflow: hidden; position: fixed; top: 0; right: 0; bottom: 0; left: 0; -webkit-overflow-scrolling: touch;"></div>');
	$div.css("z-index", zIndex);
	$("body").append($div);
	return $div;
};

dvs.removeModalCover = function($div) {
	$div.remove();
};

dvs.showLoading = function(dom) {
	var indicatorImg = dvs.getContextPath() + "/static/images/indicator.gif";
	if (dom) {
		var $div = $(dom);
		$div.hide();
		var indicator = "<div class='dvs-indicator'><img src='" + indicatorImg + "' /></div>";
		$div.after(indicator);
		return $div;
	} else {
		var $div = dvs.addModalCover(999999);
		$div.css("background-color", "rgba(0, 0, 0, 0.1)");
		var indicator = "<div class='dvs-indicator' style='position: fixed; top: 45%; left: 47%;'><img src='" + indicatorImg + "' /></div>";
		$div.append(indicator);
		return $div;
	}
};

dvs.showLoadingText = function(text) {
	var indicatorImg = dvs.getContextPath() + "/static/images/indicator.gif";
	var $div = dvs.addModalCover(999999);
	$div.css("background-color", "rgba(0, 0, 0, 0.1)");
	var indicator = "<div class='dvs-indicator' style='position: fixed; top: 45%; left: 47%; text-align: center;'><img src='" + indicatorImg
			+ "' style='margin: 0 auto;' /></br>" + text + "</div>";
	$div.append(indicator);
	return $div;
};

dvs.removeLoading = function($div) {
	if ($div.next("div.dvs-indicator").length > 0) {
		$div.next("div.dvs-indicator").remove();
		$div.show();
	} else {
		dvs.removeModalCover($div);
	}
};

dvs.dialogWindowMap = {};
dvs.dialogMap = {};

dvs.openDialog = function(id, url, option) {
	var modalId = "dvs_modal_" + id;
	option = $.extend({
		theWindow : window
	}, option);

	var theWindow = option.theWindow;
	var $theWindow = $(theWindow);
	var $theDocument = $(theWindow.document);

	window.top.dvs.dialogWindowMap[modalId] = theWindow;

	option = $.extend({
		title : "",
		width : ($theWindow.width() * 0.9) + "px",
		height : ($theWindow.height() * 0.9) + "px"
	}, option);

	var iframeId = modalId + "_iframe";
	var modalDialogStyle = "width: " + option.width + "; height: " + option.height + ";";

	var html = '';
	html += '<div class="modal" id="' + modalId + '" tabindex="-1" ';
	if (option.zindex) {
		html += 'style="z-index: ' + option.zindex + '"';
	}
	html += '><div class="modal-dialog" style="' + modalDialogStyle + '">';
	html += '<div class="modal-content" style="width: 95%; height: 100%;">';
	html += '<div class="modal-header">';
	if (!option.hideClose) {
		html += '<button type="button" class="close" onclick="dvs.closeDialog(\'' + id + '\');">&times;</button>';
	}
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
			option.onCloseCallback(theWindow.dvsDialogOutData);
		}
		$theModal.remove();
		$theBackdrop.remove();
	});
	theWindow.dvs.dialogMap[modalId] = modalObj;

	var $theIframe = $("#" + iframeId, $theDocument);
	var contentWindow = $theIframe[0].contentWindow;
	contentWindow.dvsDialogId = id;
	contentWindow.dvsDialogInData = option.inData;
};

dvs.closeDialog = function(id, option) {
	var modalId = "dvs_modal_" + id;
	option = $.extend({}, option);

	var theWindow = window.top.dvs.dialogWindowMap[modalId];
	var $theWindow = $(theWindow);
	var $theDocument = $(theWindow.document);

	delete window.top.dvs.dialogWindowMap[modalId];

	theWindow.dvsDialogOutData = option.outData;
	var modalObj = theWindow.dvs.dialogMap[modalId];
	var bs_modal = modalObj.data("bs.modal");
	bs_modal.hide();
};

dvs.openDivDialog = function(id, $div, option) {
	var modalId = "dvs_modal_" + id;
	option = $.extend({}, option);

	var theWindow = window;
	var $theWindow = $(theWindow);
	var $theDocument = $(theWindow.document);

	option = $.extend({
		title : "",
		width : ($theWindow.width() * 0.9) + "px",
		height : ($theWindow.height() * 0.9) + "px"
	}, option);

	var divId = modalId + "_div";
	var modalDialogStyle = "width: " + option.width + "; height: " + option.height + ";";

	var html = '';
	html += '<div class="modal" id="' + modalId + '" tabindex="-1">';
	html += '<div class="modal-dialog" style="' + modalDialogStyle + '">';
	html += '<div class="modal-content" style="width: 100%; height: 100%;">';
	html += '<div class="modal-header">';
	html += '<button type="button" class="close" onclick="dvs.closeDivDialog(\'' + id + '\');">&times;</button>';
	html += '<h4 class="modal-title">';
	html += option.title;
	html += '</h4>';
	html += '</div>';
	html += '<div class="modal-body" style="width: 100%; height: 90%;">';
	html += '<div id="' + divId + '" style="width: 100%; height: 100%; overflow: auto;"></div>';
	html += '</div>';
	// html += '<div class="modal-footer">';
	// html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '<div class="modal-backdrop in" id="modal_backdrop_' + modalId + '"></div>';
	$("body", $theDocument).append(html);
	$("#" + divId, $theDocument).append($div);
	$div.show();

	var $theModal = $("#" + modalId, $theDocument);
	var $theBackdrop = $("#modal_backdrop_" + modalId, $theDocument);
	var modalObj = $theModal.modal({
		backdrop : false
	});
	$theModal.on("shown.bs.modal", function() {
	});
	$theModal.on("hidden.bs.modal", function() {
		if (option.onCloseCallback && $.type(option.onCloseCallback) == "function") {
			option.onCloseCallback();
		}
		$div.hide();
		$("body", $theDocument).append($div);
		$theModal.remove();
		$theBackdrop.remove();
	});
	theWindow.dvs.dialogMap[modalId] = modalObj;
};

dvs.closeDivDialog = function(id, option) {
	var modalId = "dvs_modal_" + id;
	option = $.extend({}, option);

	var theWindow = window;
	var $theWindow = $(theWindow);
	var $theDocument = $(theWindow.document);

	var modalObj = theWindow.dvs.dialogMap[modalId];
	var bs_modal = modalObj.data("bs.modal");
	bs_modal.hide();
};

dvs.expandZTreeNode = function(zTree, node, level) {
	if (level > 0) {
		level--;
		zTree.expandNode(node, true, false, false, false);
		if (node.children) {
			for (var i = 0; i < node.children.length; i++) {
				var child = node.children[i];
				dvs.expandZTreeNode(zTree, child, level);
			}
		}
	}
};

dvs.expandZTree = function(zTree, level) {
	if (level > 0) {
		var nodes = zTree.getNodes();
		for (var i = 0; i < nodes.length; i++) {
			var node = nodes[i];
			dvs.expandZTreeNode(zTree, node, level);
		}
	}
};

dvs.jqGridPrmNames = {
	page : "page",
	rows : "limit",
	sort : "sort_by",
	order : "sort_order",
	search : null,
	nd : null
};

dvs.jqGridSerializeData = function(postData, searchForm, searchFields) {
	if (postData.sort_by) {
		var sort_by = postData.sort_by + " " + postData.sort_order;
		sort_by = sort_by.replace(/, /g, ",");
		sort_by = sort_by.replace(/ /g, "_");
		sort_by = sort_by.split(",");

		postData.sort_by = [];
		for (var i = 0; i < sort_by.length; i++) {
			if (sort_by[i].indexOf("_") == 0) {
				continue;
			} else {
				postData.sort_by.push(sort_by[i]);
			}
		}
	} else {
		delete postData.sort_by;
	}
	delete postData.sort_order;

	var params = dvs.collectForm(searchForm);
	params.fields_search = dvs.toJSON(dvs.collectSearchFields(searchFields));

	postData = dvs.merge(postData, params);
	return postData;
};

dvs.toJSON = function(obj) {
	if (obj) {
		return $.toJSON(obj);
	} else {
		return "{}";
	}
};

dvs.parseJSON = function(json) {
	if (json) {
		return $.parseJSON(json);
	} else {
		return {};
	}
};

dvs.param = function(obj) {
	if (obj) {
		return $.param(obj);
	} else {
		return "";
	}
};

dvs.merge = function() {
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
				dvs.alert("Illegal arg：" + arg + ", type=" + type);
				return false;
			}
		}
	}
	return ret;
};

dvs.collectForm = function(form) {
	var type = $.type(form);
	var forms = [];
	if (type == "string") {
		forms.push(form);
	} else if (type == "array") {
		forms = form;
	} else {
		dvs.alert("Illegal form：" + form + ", type=" + type);
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

dvs.setForm = function(form, json) {
	if ($.type(json) == "string") {
		json = dvs.parseJSON(json);
	}

	var jsonType = $.type(json);
	if (jsonType != "object") {
		dvs.alert("Illegal json：" + json + ", type=" + jsonType);
		return false;
	}

	var type = $.type(form);
	var forms = [];
	if (type == "string") {
		forms.push(form);
	} else if (type == "array") {
		forms = form;
	} else {
		dvs.alert("Illegal form：" + form + ", type=" + type);
		return false;
	}

	$.each(forms, function(index, fromId) {
		var $form = $("#" + fromId);
		$("input,select,textarea", $form).each(function(index, ele) {
			var $ele = $(ele);
			var name = $ele.attr("name");
			if (name && json.hasOwnProperty(name)) {
				var value = json[name] + "";
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

dvs.clearForm = function(form) {
	var type = $.type(form);
	var forms = [];
	if (type == "string") {
		forms.push(form);
	} else if (type == "array") {
		forms = form;
	} else {
		dvs.alert("Illegal form：" + form + ", type=" + type);
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

dvs.ajax = function(settings) {
	var url = settings.url;
	if (!url) {
		dvs.alert("Illegal url：" + url);
		return false;
	}
	if (url.charAt(0) != "/") {
		url = "/" + url;
	}
	url = dvs.getContextPath() + url;

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
		var formMap = dvs.collectForm(settings.form);
		reqMap = dvs.merge(reqMap, formMap);
	}
	if (settings.param) {
		reqMap = dvs.merge(reqMap, settings.param);
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

	var $loading = null;
	if (loading == "none") {
	} else if (loading == "modal") {
		$loading = dvs.showLoading();
	} else if (loading == "notice") {
		$loading = dvs.showLoading();
	} else if (loading == "text") {
		var showText = settings.showText;
		if (!showText) {
			loading = "加载中";
		}
		$loading = dvs.showLoadingText(showText);
	} else {
		$loading = dvs.showLoading(loading);
	}

	var ajaxSettings = {
		url : url,
		type : type,
		async : async,
		data : data,
		dataType : "text",
		timeout : timeout
	};
	$.ajax(ajaxSettings).always(function() { // data|jqXHR, textStatus, jqXHR|errorThrown
		if ($loading) {
			dvs.removeLoading($loading);
		}
	}).done(function(respData, textStatus, jqXHR) {
		if (settings.callback) {
			if (respData && parseJSON) {
				try {
					respData = dvs.parseJSON(respData);
				} catch (e) {
				}
			}

			var t = $.type(settings.callback);
			if (t == "function") {
				settings.callback(respData);
			} else if (t == "array") {
				for (var i = 0; i < settings.callback.length; i++) {
					var callback_i = settings.callback[i];
					if ($.type(callback_i) == "function") {
						callback_i(respData);
					}
				}
			}
		}
	}).fail(function(jqXHR, textStatus, errorThrown) {
		if (settings.fail) {
			var t = $.type(settings.fail);
			if (t == "function") {
				settings.fail(jqXHR, textStatus, errorThrown);
			} else if (t == "array") {
				for (var i = 0; i < settings.fail.length; i++) {
					var fail_i = settings.fail[i];
					if ($.type(fail_i) == "function") {
						fail_i(jqXHR, textStatus, errorThrown);
					}
				}
			}
		}
	});
};

dvs.uploadFile = function(settings) {
	var url = settings.url;
	if (!url) {
		dvs.alert("Illegal url：" + url);
		return false;
	}
	if (url.charAt(0) != "/") {
		url = "/" + url;
	}
	url = dvs.getContextPath() + url;

	var reqMap = {};
	if (settings.form) {
		var formMap = dvs.collectForm(settings.form);
		reqMap = dvs.merge(reqMap, formMap);
	}
	if (settings.param) {
		reqMap = dvs.merge(reqMap, settings.param);
	}
	url = url + "?" + $.param(reqMap);

	var data = settings.data;

	var ajaxSettings = {
		type : "POST",
		url : url,
		data : data,
		processData : false,
		contentType : false
	};
	$.ajax(ajaxSettings).always(function() { // data|jqXHR, textStatus, jqXHR|errorThrown

	}).done(function(respData, textStatus, jqXHR) {
		if (settings.callback) {
			if (respData) {
				try {
					respData = dvs.parseJSON(respData);
				} catch (e) {
				}
			}

			var t = $.type(settings.callback);
			if (t == "function") {
				settings.callback(respData);
			} else if (t == "array") {
				for (var i = 0; i < settings.callback.length; i++) {
					var callback_i = settings.callback[i];
					if ($.type(callback_i) == "function") {
						callback_i(respData);
					}
				}
			}
		}
	}).fail(function(jqXHR, textStatus, errorThrown) {
		if (settings.fail) {
			var t = $.type(settings.fail);
			if (t == "function") {
				settings.fail(jqXHR, textStatus, errorThrown);
			} else if (t == "array") {
				for (var i = 0; i < settings.fail.length; i++) {
					var fail_i = settings.fail[i];
					if ($.type(fail_i) == "function") {
						fail_i(jqXHR, textStatus, errorThrown);
					}
				}
			}
		}
	});
}

dvs.initCascading = function(divCascadId, layer, option) {
	var $divCascad = $("#" + divCascadId);
	var cascad;

	$divCascad.cascadingDropdown({
		selectBoxes : [ {
			selector : '.step1',
			source : function(request, response) {
				dvs.ajax({
					url : "/geo_name/searchGeoName.json?pid=6295630&limit=1000",
					timeout : 60000,
					callback : function(json) {
						var geoArry = [];
						var geoNameList = json.geoNameList;
						for (var i = 0; i < geoNameList.length; i++) {
							var geoName = geoNameList[i];
							var geoObject = new Object();
							geoObject.label = geoName.asciiname;
							geoObject.value = geoName.geonameid;
							geoObject.selectd = false;
							geoArry[i] = geoObject;
						}
						response(geoArry);
					}
				});
			}
		}, {
			selector : '.step2',
			requires : [ '.step1' ],
			source : function(request, response) {
				;
				dvs.ajax({
					url : "/geo_name/searchGeoName.json?limit=1000&pid=" + $('#step1 option:selected').val(),
					timeout : 60000,
					callback : function(json) {
						var geoArry = [];
						var geoNameList = json.geoNameList;
						for (var i = 0; i < geoNameList.length; i++) {
							var geoName = geoNameList[i];
							var geoObject = new Object();
							geoObject.label = geoName.asciiname;
							geoObject.value = geoName.geonameid;
							geoObject.selectd = false;
							geoArry[i] = geoObject;
						}
						response(geoArry);
					}
				});
			}
		}, {
			selector : '.step3',
			requires : [ '.step1', '.step2' ],
			requireAll : true,
			source : function(request, response) {
				dvs.ajax({
					url : "/geo_name/searchGeoName.json?limit=1000&pid=" + $('#step2 option:selected').val(),
					callback : function(json) {
						var geoArry = [];
						var geoNameList = json.geoNameList;
						for (var i = 0; i < geoNameList.length; i++) {
							var geoName = geoNameList[i];
							var geoObject = new Object();
							geoObject.label = geoName.asciiname;
							geoObject.value = geoName.geonameid;
							geoObject.selectd = false;
							geoArry[i] = geoObject;
						}
						response(geoArry);
					}
				});
			}
		}, {
			selector : '.step4',
			requires : [ '.step1', '.step2', '.step3' ],
			requireAll : true,
			source : function(request, response) {
				dvs.ajax({
					url : "/geo_name/searchGeoName.json?limit=1000&pid=" + $('#step3 option:selected').val(),
					callback : function(json) {
						var geoArry = [];
						var geoNameList = json.geoNameList;
						for (var i = 0; i < geoNameList.length; i++) {
							var geoName = geoNameList[i];
							var geoObject = new Object();
							geoObject.label = geoName.asciiname;
							geoObject.value = geoName.geonameid;
							geoObject.selectd = false;
							geoArry[i] = geoObject;
						}
						response(geoArry);
					}
				});
			}
		}, {
			selector : '.step5',
			requires : [ '.step1', '.step2', '.step3', '.step4' ],
			requireAll : true,
			source : function(request, response) {
				dvs.ajax({
					url : "/geo_name/searchGeoName.json?limit=1000&pid=" + $('#step4 option:selected').val(),
					callback : function(json) {
						var geoArry = [];
						var geoNameList = json.geoNameList;
						for (var i = 0; i < geoNameList.length; i++) {
							var geoName = geoNameList[i];
							var geoObject = new Object();
							geoObject.label = geoName.asciiname;
							geoObject.value = geoName.geonameid;
							geoObject.selectd = false;
							geoArry[i] = geoObject;
						}
						response(geoArry);
					}
				});
			}
		} ]
	});
};

dvs.isNullOrEmpty = function(str) {
	if (str == '' || str == null || str == undefined || str == 'null') {
		return true;
	} else {
		return false;
	}
};

dvs.initVueTable = function(el, data, root, option) {
	option = $.extend({
		onClickRow : null
	}, option);
	var onClickRow = option.onClickRow;

	vueTable = new Vue({
		el : el,
		data : data,
		methods : {
			onClickRow : function(item, index) {
				if (item.selected) {
					item.selected = false;
				} else {
					item.selected = true;
				}
				onClickRow && onClickRow(item, index);
			},
			selectedRows : function() {
				return this[root].filter(function(item) {
					return item.selected == true;
				});
			},
			selectAll : function() {
				this[root].forEach(function(item) {
					item.selected = true;
				});
			},
			unselectAll : function() {
				this[root].forEach(function(item) {
					item.selected = false;
				});
			},
			selectId : function(id) {
				var item = this[root].find(function(item) {
					return item.id == id;
				});
				if (item) {
					item.selected = true;
				}
			},
			unselectId : function(id) {
				var item = this[root].find(function(item) {
					return item.id == id;
				});
				if (item) {
					item.selected = false;
				}
			},
			selectIndex : function(index) {
				if (index >= 0 && this[root].length > index) {
					var item = this[root][index];
					if (item) {
						item.selected = true;
					}
				}
			},
			unselectIndex : function(index) {
				if (index >= 0 && this[root].length > index) {
					var item = this[root][index];
					if (item) {
						item.selected = false;
					}
				}
			}
		}
	});

	return vueTable;
};

dvs.initPager = function($pageList, pagerForm, option) {
	option = $.extend({
		type : "pages",// previous_next, more
		totalCount : null,
		onClickPage : null
	}, option);
	var type = option.type;
	var onClickPage = option.onClickPage;

	var pagerFormData = dvs.collectForm(pagerForm);
	var page = parseInt(pagerFormData.page);
	var limit = parseInt(pagerFormData.limit);

	var noTotalCount = (option.totalCount == undefined || option.totalCount == null);
	var totalCount = noTotalCount ? null : parseInt(option.totalCount);

	var totalPage;
	if (noTotalCount) {
	} else {
		if (totalCount % limit === 0) {
			totalPage = parseInt(totalCount / limit);
		} else {
			totalPage = parseInt(totalCount / limit) + 1;
		}
		totalPage = totalPage ? totalPage : 0;
		if (totalPage === 0) {
			page = 1;
		} else if (page > totalPage) {
			page = totalPage;
		} else if (page < 1 && totalPage != 0) {
			page = 1;
		}
	}

	$pageList.html("");
	if (type == "pages" || type == "previous_next") {
		var $prev = $('<li class=""><a href="javascript:;" title="上一页">«</a></li>');
		if (page <= 1) {
			$prev.addClass('disabled');
		} else {
			$prev.find('a').on('click', function() {
				dvs.setForm(pagerForm, {
					page : page - 1
				});
				onClickPage && onClickPage(page - 1);
			});
		}
		$pageList.append($prev);
	}

	if (type == "pages") {
		var list = [ 1 ];
		if (page > 4) {
			list.push('...');
		}
		for (var i = 0; i < 5; i++) {
			var no = page - 2 + i;
			if (no > 1 && no <= totalPage - 1) {
				list.push(no);
			}
		}
		if (page + 1 < totalPage - 1) {
			list.push('...');
		}
		if (totalPage > 1) {
			list.push(totalPage);
		}
		$.each(list, function(index, item) {
			var $li = $('<li><a href="javascript:;"></a></li>');
			if (item === '...') {
				$li.addClass('').find('a').text('...');
			} else if (item === page) {
				$li.addClass('active').find('a').text(item);
			} else {
				$li.find('a').text(item).prop('title', '第' + item + '页').on(
						'click', function(e) {
							dvs.setForm(pagerForm, {
								page : item
							});
							onClickPage && onClickPage(item);
						});
			}
			$pageList.append($li);
		});
	}

	var nextText;
	var nextTitle;
	if (type == "pages" || type == "previous_next") {
		nextText = "»";
		nextTitle = "下一页";
	} else if (type = "more") {
		nextText = "加载更多";
		nextTitle = "加载更多";
	}

	var $next = $('<li class=""><a href="javascript:;" title="' + nextTitle
			+ '">' + nextText + '</a></li>');
	if (!noTotalCount && page >= totalPage) {
		$next.addClass('disabled');
	} else {
		$next.find('a').on('click', function() {
			dvs.setForm(pagerForm, {
				page : page + 1
			});
			onClickPage && onClickPage(page + 1);
		});
	}
	$pageList.append($next);
};


dvs.newWebSocket = function(option) {
	if ("WebSocket" in window) {
	} else {
		dvs.alert("您的浏览器不支持 WebSocket !");
		return null;
	}

	option = $.extend({
		https : document.location.protocol == "https:",
		host : document.location.host,
		onOpen : function() {
		},
		onMessage : function(evt) {
		},
		onClose : function(evt) {
		},
		onError : function() {
		}
	}, option);

	var ws = null;
	if (option.https) {
		ws = new WebSocket("wss://" + option.host + "/websocket");
	} else {
		ws = new WebSocket("ws://" + option.host + "/websocket");
	}
	ws.onopen = function() {
		var t = $.type(option.onOpen);
		if (t == "function") {
			option.onOpen();
		}
	};
	ws.onmessage = function(evt) {
		var json = dvs.parseJSON(evt.data);

		var t = $.type(option.onMessage);
		if (t == "function") {
			option.onMessage(json);
		}

		var callback = json.callback;
		if (callback) {
			delete json.callback;
			var callbackFunction = ws.dvsSend_callbackMap[callback];
			delete ws.dvsSend_callbackMap[callback];
			if ($.type(callbackFunction) == "function") {
				callbackFunction(json);
			} else {
				dvs.alert("Illegal callbackFunction：" + callbackFunction);
			}
		}
	};
	ws.onclose = function(evt) {
		var t = $.type(option.onClose);
		if (t == "function") {
			option.onClose(evt);
		}
	};
	ws.onerror = function(evt) {
		var t = $.type(option.onError);
		if (t == "function") {
			option.onError(evt);
		}
	};

	ws.dvsSend_callbackMap = {};
	ws.dvsSend = function(settings) {
		var url = settings.url;
		if (!url) {
			dvs.alert("Illegal url：" + url);
			return false;
		}
		if (url.charAt(0) != "/") {
			url = "/" + url;
		}

		var reqMap = {};
		if (settings.form) {
			var formMap = dvs.collectForm(settings.form);
			reqMap = dvs.merge(reqMap, formMap);
		}
		if (settings.param) {
			reqMap = dvs.merge(reqMap, settings.param);
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

		var callback = null;
		if (settings.callback) {
			callback = "dvs_" + dvs.uuid();

			var $loading = null;
			if (loading == "none") {
			} else if (loading == "modal") {
				$loading = dvs.showLoading();
			} else if (loading == "notice") {
				$loading = dvs.showLoading();
			} else {
				$loading = dvs.showLoading(loading);
			}

			ws.dvsSend_callbackMap[callback] = function(respData) {
				if ($loading) {
					dvs.removeLoading($loading);
				}

				var t = $.type(settings.callback);
				if (t == "function") {
					settings.callback(respData);
				} else if (t == "array") {
					for (var i = 0; i < settings.callback.length; i++) {
						var callback_i = settings.callback[i];
						if ($.type(callback_i) == "function") {
							callback_i(respData);
						}
					}
				}
			}
		}

		ws.send(dvs.toJSON({
			url : url,
			callback : callback,
			data : data
		}));
	}

	return ws;
}
