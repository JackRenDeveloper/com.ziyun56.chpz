var login = (function() {
	var args = null;
	var loginFormValidator = null;
	var registerFormValidator = null;
	var upLoadClicktag = 0;

	return {
		onLoad : function(theArgs) {
			args = theArgs;
			loginFormValidator = $("#loginForm").validate({
				wrapper : "div"
			});
			registerFormValidator = $("#registerForm").validate({
				rules : {
					password : {
						required : true
					},
					rpassword : {
						required : true,
						equalTo : "#first_password"
					},
					email : {
						required : true,
						email : true
					}
				},
				messages : {
					password : {
						required : "*请输入密码"
					},
					rpassword : {
						required : "*请输入确认密码",
						equalTo : "*请再次输入相同的值"
					},
					email : {
						required : "*请输入邮箱",
						email : "*请输入正确的邮箱格式"
					}
				},
				wrapper : "div"
			});
			login.bindSubmit();
			login.luosimaoRest();
		},
		bindSubmit : function() {
			$(document).keypress(function(e) {
				if (e.which == 13) {
					login.doLogin();
				}
			});
			$("#submit_btn").click(function() {
				login.doLogin();
			});
		},
		luosimaoRest : function() {
			LUOCAPTCHA.reset();
		},
		rememberUser : function() {
			var mobile_phone = $("#mobile_phone").val();
			var password = $("#password").val();
			var user = {
				"mobile_phone" : mobile_phone,
				"password" : password
			};
			var _user = JSON.stringify(user);
			Cookies.set("user", _user, {
				expires : 7,
				path : "/login/login.html"
			});
		},
		doLogin : function() {
			if (!loginFormValidator.form()) {
				var msg = dvs.getValidatorErrors(loginFormValidator);
				// dvs.alert(msg);
				return false;
			}

			// 第一次进来为true
			if (upLoadClicktag == 0) {
				// 改版变量
				upLoadClicktag = 1;
				// 此处写你要做的事情，操作DOM，发送ajax请求等等。
				// 3秒过后可以再次点击
				setTimeout(function() {
					upLoadClicktag = 0
				}, 3000);

				var luotest_response = $("#lc-captcha-response").val();
				if (!luotest_response) {
					alert("验证未通过，请验证！");
					return false;
				}
				var resp = JSON.stringify(luotest_response);

				dvs.ajax({
					url : "/login/doLogin.json",
					form : "loginForm",
					param : {
						resp : resp
					},
					callback : function(json) {
						switch (json.code) {
						case 0:
							if ($("#remember").is(":checked")) {
								login.rememberUser();
							}
							dvs.gotoUrl("/admin/index.html")
							break;
						case -1:
							dvs.alert("用户名或密码错误，请重新输入！");
							$("#captchaAnswer").val("");
							login.luosimaoRest();
							break;
						case -2:
							dvs.alert("用户名或密码错误，请重新输入！");
							$("#captchaAnswer").val("");
							login.luosimaoRest();
							break;
						case -3:
							dvs.alert("用户名或密码错误，请重新输入 ！");
							$("#captchaAnswer").val("");
							login.luosimaoRest();
							break;
						case -4:
							dvs.alert("验证码输入错误，请重新输入！");
							$("#captchaAnswer").val("");
							login.luosimaoRest();
							break;
						default:
							dvs.alert("登录失败");
							$("#captchaAnswer").val("");
							login.luosimaoRest();
							break;
						}
					}
				});
			} else {
				alert('请勿频繁操作！');
			}

		},
		doRegister : function() {
			dvs.gotoUrl("/front/register.html");
		},
		doWalletLogin : function() {
			window.open("/admin/doWalletLogin.json", "_self");
		},
	};
})();
