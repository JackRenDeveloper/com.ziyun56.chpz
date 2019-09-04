L.Control.ExportImage = L.Control.extend({
	options : {
		title : 'Export image',
		position : 'topleft',
		img : 'img',
		callback : function() {
		}
	},
	onAdd : function() {
		var container = L.DomUtil.create('div', 'leaflet-control-exportImage leaflet-bar leaflet-control');
		var link = L.DomUtil.create('a', 'fa fa-image fa-lg leaflet-bar-part', container);
		link.id = "leafletExportImage";
		link.title = this.options.title;

		var map = this._map;
		var options = this.options;
		L.DomEvent.addListener(link, 'click', function() {
			if (link.className.indexOf("fa-spinner fa-spin") >= 0) {
				return;
			}
			link.className = link.className.replace("fa-image", "fa-spinner fa-spin border-radius-15");
			leafletImage(map, function(err, canvas) {
				var dimensions = map.getSize();
				var img = document.getElementById(options.img);
				img.width = dimensions.x;
				img.height = dimensions.y;
				img.src = canvas.toDataURL();
				link.className = link.className.replace("fa-spinner fa-spin border-radius-15", "fa-image");
				if (options.callback) {
					options.callback();
				}
			});
		}, this);
		L.DomEvent.disableClickPropagation(container);
		return container;
	}
});

L.exportImage = function(options) {
	function addCSS() {
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".leaflet-control-exportImage a { \
			cursor: pointer; \
		} \
		.border-radius-15 { \
			border-radius: 15px !important; \
		} \
		._epHidden{ \
			display:none!important; \
		} \
		@media print { \
			html {padding: 0px!important;} \
			.leaflet-control-exportImage-button{display: none!important;} \
		}";
		document.body.appendChild(css);
	}
	addCSS()
	return new L.Control.ExportImage(options);
};
