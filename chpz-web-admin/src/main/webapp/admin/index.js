var adminIndex = (function() {

	var alwaysOpenInNewTab = false;

	return {
		onLoad : function() {
		},
		openMenu : function(ele, id, name, url) {
			$("#headMenuLabel").html(name);
			if (ele) {
				$(".sidebar li").removeClass("active");
				$(ele).parent("li").addClass("active");
			}

			$("#mainFrame").attr("src", url);
		},
		openTab : function(ele, id, name, url) {
			$("#headMenuLabel").html(name);
			if (ele) {
				$(".sidebar li").removeClass("active");
				$(ele).parent("li").addClass("active");
			}

			if (alwaysOpenInNewTab) {
				id = dvs.uuid();
			}

			var tab_id = "tab_" + id;
			var frame_id = "frame_" + id;

			if (alwaysOpenInNewTab) {
			} else {
				if ($("#navTabs a[href='#" + tab_id + "']").size() > 0) {
					$("#navTabs a[href='#" + tab_id + "']").click();
					return;
				}
			}

			var tab_html = '';
			tab_html += '<li><a href="#' + tab_id + '" data-toggle="tab">';
			tab_html += name + '&nbsp;&nbsp;<span class="fa fa-times" onclick="adminIndex.closeTab(\'' + tab_id + '\', \'' + name + '\');"></span>';
			tab_html += '</a></li>';
			var $tab_html = $(tab_html);
			$("#navTabs li").removeClass("active");
			$tab_html.addClass("active");
			$("#navTabs").append($tab_html);

			var height = $("#tabContent").height();
			var content_html = '';
			content_html += '<div class="tab-pane" id="' + tab_id + '">';
			content_html += '<iframe id="' + frame_id + '" name="' + frame_id + '" src="" style="overflow: visible;" width="100%" height="' + height
					+ '" frameborder="no" border="0"></iframe>';
			content_html += '</div>';
			var $content_html = $(content_html);
			$("#tabContent div.tab-pane").removeClass("active");
			$content_html.addClass("active");
			$("#tabContent").append($content_html);

			$("#" + frame_id).attr("src", url);
		},
		closeTab : function(tab_id, name) {
			if (!dvs.confirm("确定关闭：" + name + "？")) {
				return false;
			}

			var $li = $("#navTabs a[href='#" + tab_id + "']").parent("li");
			if ($li.prev().size() > 0) {
				$li.prev().find("a").click();
			} else if ($li.next().size() > 0) {
				$li.next().find("a").click();
			} else {
			}
			$li.remove();
			$("#" + tab_id).remove();
		},
		doLogout : function() {
			dvs.ajax({
				url : "/login/doLogout.json",
				callback : function(json) {
					dvs.gotoUrl("/login/login.html");
				}
			});
		}
	};
})();
