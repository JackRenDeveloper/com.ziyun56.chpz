$.validator.setDefaults({
	showErrors : function(errorMap, errorList) {
		// this.defaultShowErrors();
		// return;

		var self = this;

		function getErrorTarget($element) {
			var $errorTarget = $element;
			var target = $element.data("validation-error-target");
			if (target) {
				$errorTarget = $("#" + target);
				if ($errorTarget.length == 0) {
					throw new Error("getErrorTarget can not find errorTarget : " + target);
				}
			}
			return $errorTarget;
		}

		this.currentElements.each(function() {
			var $element = $(this);
			var elementID = self.idOrName(this);

			var $errorTarget = getErrorTarget($element);
			$errorTarget.removeClass("validate-error");

			var $qtip = $("#qtip-validate-" + elementID);
			$qtip.qtip("destroy", true);
		});

		function showErrorTip(element, message) {
			var $element = $(element);
			var elementID = self.idOrName(element);

			var $errorTarget = getErrorTarget($element);
			$errorTarget.addClass("validate-error");

			$errorTarget.qtip({
				id : "validate-" + elementID,
				content : {
					text : message
				},
				position : {
					my : "top left",
					at : "bottom left"
				},
				style : {
					classes : "qtip-red qtip-shadow"
				},
				show : {
					event : "mouseenter mouseleave focusin focusout",
					ready : true
				},
				hide : {
					event : false
				}
			});
		}

		for (var i = 0; i < errorList.length; i++) {
			var error = errorList[i];
			showErrorTip(error.element, error.message);
		}
	}
});

$.validator.addMethod("regexp", function(value, element, params) {
	var pattern = params.pattern;
	var modifiers = params.modifiers;
	var regExp = new RegExp(pattern, modifiers);
	return regExp.test(value);
}, "输入不符合要求");

$.validator.addMethod("price", function(value, element, params) {
	return /^[0-9]+(\.[0-9]{1,2})?$/.test(value);
}, "价格格式不正确");

// ----- http://www.cnblogs.com/jianjialin/p/5258783.html -----

// 判断整数value是否等于0
$.validator.addMethod("isIntEqZero", function(value, element) {
	value = parseInt(value);
	return this.optional(element) || value == 0;
}, "整数必须为0");

// 判断整数value是否大于0
$.validator.addMethod("isIntGtZero", function(value, element) {
	value = parseInt(value);
	return this.optional(element) || value > 0;
}, "整数必须大于0");
$.validator.addMethod("isTransportNumber", function(value, element) {
	var transport_number = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
	return this.optional(element) || (transport_number.test(value));
}, "请正确填写您的车牌号");
// 判断整数value是否大于或等于0
$.validator.addMethod("isIntGteZero", function(value, element) {
	value = parseInt(value);
	return this.optional(element) || value >= 0;
}, "整数必须大于或等于0");

// 判断整数value是否不等于0
$.validator.addMethod("isIntNEqZero", function(value, element) {
	value = parseInt(value);
	return this.optional(element) || value != 0;
}, "整数必须不等于0");

// 判断整数value是否小于0
$.validator.addMethod("isIntLtZero", function(value, element) {
	value = parseInt(value);
	return this.optional(element) || value < 0;
}, "整数必须小于0");

// 判断整数value是否小于或等于0
$.validator.addMethod("isIntLteZero", function(value, element) {
	value = parseInt(value);
	return this.optional(element) || value <= 0;
}, "整数必须小于或等于0");

// 判断浮点数value是否等于0
$.validator.addMethod("isFloatEqZero", function(value, element) {
	value = parseFloat(value);
	return this.optional(element) || value == 0;
}, "浮点数必须为0");

// 判断浮点数value是否大于0
$.validator.addMethod("isFloatGtZero", function(value, element) {
	value = parseFloat(value);
	return this.optional(element) || value > 0;
}, "浮点数必须大于0");

// 判断浮点数value是否大于或等于0
$.validator.addMethod("isFloatGteZero", function(value, element) {
	value = parseFloat(value);
	return this.optional(element) || value >= 0;
}, "浮点数必须大于或等于0");

// 判断浮点数value是否不等于0
$.validator.addMethod("isFloatNEqZero", function(value, element) {
	value = parseFloat(value);
	return this.optional(element) || value != 0;
}, "浮点数必须不等于0");

// 判断浮点数value是否小于0
$.validator.addMethod("isFloatLtZero", function(value, element) {
	value = parseFloat(value);
	return this.optional(element) || value < 0;
}, "浮点数必须小于0");

// 判断浮点数value是否小于或等于0
$.validator.addMethod("isFloatLteZero", function(value, element) {
	value = parseFloat(value);
	return this.optional(element) || value <= 0;
}, "浮点数必须小于或等于0");

// 判断浮点型
$.validator.addMethod("isFloat", function(value, element) {
	return this.optional(element) || /^[-\+]?\d+(\.\d+)?$/.test(value);
}, "只能包含数字、小数点等字符");

// 匹配integer
$.validator.addMethod("isInteger", function(value, element) {
	return this.optional(element) || parseInt(value) == value;
}, "请输入一个整数");

// 判断数值类型，包括整数和浮点数
$.validator.addMethod("isNumber", function(value, element) {
	return this.optional(element) || /^[-\+]?\d+$/.test(value) || /^[-\+]?\d+(\.\d+)?$/.test(value);
}, "匹配数值类型，包括整数和浮点数");

// 只能输入[0-9]数字
$.validator.addMethod("isDigits", function(value, element) {
	return this.optional(element) || /^\d+$/.test(value);
}, "只能输入0-9数字");

// 判断中文字符
$.validator.addMethod("isChinese", function(value, element) {
	return this.optional(element) || /^[\u0391-\uFFE5]+$/.test(value);
}, "只能包含中文字符。");

// 判断英文字符
$.validator.addMethod("isEnglish", function(value, element) {
	return this.optional(element) || /^[A-Za-z]+$/.test(value);
}, "只能包含英文字符。");

// 手机号码验证
$.validator.addMethod("isMobile", function(value, element) {
	var length = value.length;
	return this.optional(element) || (length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value));
}, "请正确填写您的手机号码。");

// 电话号码验证
$.validator.addMethod("isPhone", function(value, element) {
	var tel = /^(\d{3,4}-?)?\d{7,9}$/g;
	return this.optional(element) || (tel.test(value));
}, "请正确填写您的电话号码。");

// 联系电话(手机/电话皆可)验证
$.validator.addMethod("isTel", function(value, element) {
	var length = value.length;
	var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	var tel = /^(\d{3,4}-?)?\d{7,9}$/g;
	return this.optional(element) || tel.test(value) || (length == 11 && mobile.test(value));
}, "请正确填写您的联系方式");

// 匹配qq
$.validator.addMethod("isQq", function(value, element) {
	var qq = /^[1-9]\d{4,12}$/;
	return this.optional(element) || qq.test(value);
}, "请输入正确的QQ号码");

// 邮政编码验证
$.validator.addMethod("isZipCode", function(value, element) {
	var zip = /^[0-9]{6}$/;
	return this.optional(element) || (zip.test(value));
}, "请正确填写您的邮政编码。");

// 匹配密码，以字母开头，长度在6-12之间，只能包含字符、数字和下划线。
$.validator.addMethod("isPwd", function(value, element) {
	return this.optional(element) || /^[a-zA-Z]\\w{6,12}$/.test(value);
}, "以字母开头，长度在6-12之间，只能包含字符、数字和下划线。");

// 身份证号码验证
$.validator.addMethod("isIdCardNo", function(value, element) {
	// var idCard = /^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/;
	return this.optional(element) || isIdCardNo(value);
}, "请输入正确的身份证号码。");
//手机号码验证
$.validator.addMethod("isMobile", function(value, element) {
	var length = value.length;
	return this.optional(element) || (length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value));
}, "请正确填写您的手机号码。");

// IP地址验证
$.validator
		.addMethod(
				"ip",
				function(value, element) {
					return this.optional(element)
							|| /^(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.)(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.){2}([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))$/
									.test(value);
				}, "请填写正确的IP地址。");

// 字符验证，只能包含中文、英文、数字、下划线等字符。
$.validator.addMethod("stringCheck", function(value, element) {
	return this.optional(element) || /^[a-zA-Z0-9\u4e00-\u9fa5-_]+$/.test(value);
}, "只能包含中文、英文、数字、下划线等字符");

// 匹配english
$.validator.addMethod("isEnglish", function(value, element) {
	return this.optional(element) || /^[A-Za-z]+$/.test(value);
}, "请输入英文");

// 匹配汉字
$.validator.addMethod("isChinese", function(value, element) {
	return this.optional(element) || /^[\u4e00-\u9fa5]+$/.test(value);
}, "请输入汉字");

// 匹配中文(包括汉字和字符)
$.validator.addMethod("isChineseChar", function(value, element) {
	return this.optional(element) || /^[\u0391-\uFFE5]+$/.test(value);
}, "匹配中文(包括汉字和字符) ");

// 判断是否为合法字符(a-zA-Z0-9-_)
$.validator.addMethod("isRightfulString", function(value, element) {
	return this.optional(element) || /^[A-Za-z0-9_-]+$/.test(value);
}, "判断是否为合法字符(a-zA-Z0-9-_)");

// 判断是否包含中英文特殊字符，除英文"-_"字符外
$.validator
		.addMethod(
				"isContainsSpecialChar",
				function(value, element) {
					var reg = RegExp(/[(\ )(\`)(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\+)(\=)(\|)(\{)(\})(\')(\:)(\;)(\')(',)(\[)(\])(\.)(\<)(\>)(\/)(\?)(\~)(\！)(\@)(\#)(\￥)(\%)(\…)(\&)(\*)(\（)(\）)(\—)(\+)(\|)(\{)(\})(\【)(\】)(\‘)(\；)(\：)(\”)(\“)(\’)(\。)(\，)(\、)(\？)]+/);
					return this.optional(element) || !reg.test(value);
				}, "含有中英文特殊字符");

// 身份证号码的验证规则
function isIdCardNo(num) {
	// if (isNaN(num)) {alert("输入的不是数字！"); return false;}
	var len = num.length, re;
	if (len == 15)
		re = new RegExp(/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{2})(\w)$/);
	else if (len == 18)
		re = new RegExp(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/);
	else {
		// alert("输入的数字位数不对。");
		return false;
	}
	var a = num.match(re);
	if (a != null) {
		if (len == 15) {
			var D = new Date("19" + a[3] + "/" + a[4] + "/" + a[5]);
			var B = D.getYear() == a[3] && (D.getMonth() + 1) == a[4] && D.getDate() == a[5];
		} else {
			var D = new Date(a[3] + "/" + a[4] + "/" + a[5]);
			var B = D.getFullYear() == a[3] && (D.getMonth() + 1) == a[4] && D.getDate() == a[5];
		}
		if (!B) {
			// alert("输入的身份证号 "+ a[0] +" 里出生日期不对。");
			return false;
		}
	}
	if (!re.test(num)) {
		// alert("身份证最后一位只能是数字和字母。");
		return false;
	}
	return true;
}

// ----- https://gist.github.com/lyhapple/5696861 -----

$.validator.addMethod("numberName", function(value, element) {
	return this.optional(element) || /^[0-9]+$/.test(value);
}, "输入的值只能是数字!");

$.validator.addMethod("enString", function(value, element) {
	return this.optional(element) || /^[A-Za-z0-9]+$/.test(value);
}, "输入的值只能包括英文字母、数字!");

$.validator.addMethod("enStringOnly", function(value, element) {
	return this.optional(element) || /^[A-Za-z]+$/.test(value);
}, "只接受英文字符!");

// 字符验证
$.validator.addMethod("strings", function(value, element) {
	return this.optional(element) || /^[\u0391-\uFFE5\w]+$/.test(value);
}, "不允许包含特殊符号!");

// 菜单资源管理URL验证
$.validator.addMethod("menuUrl", function(value, element) {
	return this.optional(element) || /^(\/[A-Za-z0-9_\-\?%=\.]+)*\/?$/.test(value);
}, "格式不正确,应以 / 开始,包括英文字母、数字！");

$.validator.addMethod("filename", function(value, element) {
	return this.optional(element) || /^[A-Za-z0-9_\.]+$/.test(value);
}, "格式不正确,应由英文字母、数字,下划线 和小数点组成！");

$.validator.addMethod("realDigits", function(value, element) {
	return this.optional(element) || /^([1-9](?:\d+|\d{1,3}(?:,\d{3})+)*)$/.test(value);
}, "证输入正整数,不要以0开始！");

$.validator.addMethod("cnName", function(value, element) {
	return this.optional(element) || /^([a-zA-Z0-9\u4e00-\u9fa5]|[._]){3,50}$/.test(value);
}, "应由汉字,数字,字母或下划线组成,3-20个字符！");

$.validator.addMethod("username", function(value, element) {
	return this.optional(element) || /^([a-zA-Z0-9\u4e00-\u9fa5]|[._]){3,15}$/.test(value);
}, "应由汉字,数字,字母或下划线组成,3-15个字符！");

$.validator.addMethod("decimal", function(value, element) {
	var decimal = /^-?\d+(\.\d{1,2})?$/;
	return this.optional(element) || (decimal.test(value));
}, $.validator.format("小数位数不能超过两位!"));
