var MarkdownController = (function() {

	function MarkdownController() {
	};

	MarkdownController.prototype = {
		_editor : null,
		_preview : null,
		_userInput : null,
		_download : null,
		_new : null,
		_importButton : null,
		init : function() {
			this._editor = document.getElementById('editor');
			this._userInput = document.getElementById('userInput');
			this._preview = document.getElementById('preview');
			this._download = document.getElementById('downloadButton');
			this._new = document.getElementById('newButton');
			this._importButton = document.getElementById('importButton');

			this.setListeners();
		},
		setListeners : function() {
			var _this = this;
			this._userInput.addEventListener('keyup', function() {
				_this.onKeyUp();
			});
			this._download.addEventListener('click', function() {
				_this.onDownload();
			});
			this._new.addEventListener('click', function() {
				_this.onNewClick();
			});
			this._importButton.addEventListener('change', function(event) {

				_this.onImportClick(event);
			});
		},
		updatePreview : function() {
			var html = markdown.toHTML(this._userInput.value);
			html = html.replace(new RegExp('\r?\n', 'g'), "<br />");

			this._preview.innerHTML = html;
		},
		onNewClick : function() {
			this._userInput.value = " ";
			this._preview.innerHTML = " ";
		},
		onImportClick : function(event) {
			var f = event.target.files[0];
			
			// FileList object
			if (f) {
				var r = new FileReader();
				var _this = this;
				r.onload = function(e) {
					_this.onFileLoad(e);
				};
				r.readAsText(f);
			} else {
				console.log("Failed to load file");
			}

		},
		onFileLoad:function(event){
			this.onNewClick();
			var contents = event.target.result;
			console.log(contents);
			this._userInput.value =contents;
			this.updatePreview();
		},
		onDownload : function() {
			var blob = new Blob([this._userInput.value], {
				type : "text/plain;charset=utf-8"
			});
			var filesaver = window.saveAs(blob, CoreModel.titleInput.value + ".md");
		},
		onKeyUp : function() {
			this.updatePreview();
		}
	};

	return new MarkdownController();

})();
