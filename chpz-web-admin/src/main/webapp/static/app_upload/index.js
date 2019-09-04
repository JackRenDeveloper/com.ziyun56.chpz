var index = (function() {

	var args = null;

	return {
		onLoad : function(theArgs) {
			args = theArgs;

			index.initFileUploader();
		},
		initFileUploader : function() {
			$(".upload-form").each(function() {
				var $form = $(this);
				var save_file_path = $form.find(".save_file_path").val();
				var time = new Date().format("_{yyyy}{MM}{dd}_{HH}{mm}{ss}{f}.");
				var save_file_suffix = $form.find(".save_file_suffix").val();
				save_file_path = save_file_path + time + save_file_suffix;

				var $file_picker = $form.find(".file_picker");
				var $file_input = $form.find(".file_input");
				var $file_status = $form.find(".file_status");
				var $file_preview = $form.find(".file_preview");
				$file_preview = null;
				dvs.initFileUploader($file_picker, $file_input, $file_status, $file_preview, {
					useGridFS : false,
					uploadUrl : "/fs/uploadFile.json?temp=false&save_file_path=" + save_file_path
				});
			});
		},
		onReload : function() {
			window.location.reload();
		}
	};
})();
