var MainController = (function() {

	function MainController() {
	};

	MainController.prototype = {
		buttons:[],
		init : function() {
			
			this.setListeners();
		},
		setListeners : function() {
			CoreModel.titleInput.addEventListener('focus', function() {
				if (CoreModel.titleInput.value == DataModel.data.titleValue)
					CoreModel.titleInput.value = " ";
			});
			CoreModel.titleInput.addEventListener('blur', function() {
				if (CoreModel.titleInput.value == "" || CoreModel.titleInput.value == " ")
					CoreModel.titleInput.value = DataModel.data.titleValue;
			});
			this.buttons['closeWindow_button'] = document.getElementById('closeWindow_button');
			this.buttons['minimiseWindow_button'] = document.getElementById('minimiseWindow_button');
			this.buttons['maximiseWindow_button'] = document.getElementById('maximiseWindow_button');
			this.buttons['reloadWebview_button'] = document.getElementById('reloadWebview_button');
			this.buttons['closeWindow_button'].addEventListener('click', this.onButtonClick);
			this.buttons['minimiseWindow_button'].addEventListener('click', this.onButtonClick);
			this.buttons['maximiseWindow_button'].addEventListener('click', this.onButtonClick);
			this.buttons['reloadWebview_button'].addEventListener('click', this.onButtonClick);
			
		},
		 onButtonClick:function(event) {
		switch(event.currentTarget.id) {
			case 'closeWindow_button':
				chrome.app.window.current().close();
				break;
			case 'minimiseWindow_button':
				chrome.app.window.current().minimize();
				break;
			case 'maximiseWindow_button':

				if (chrome.app.window.current().isMaximized()) {

					chrome.app.window.current().restore();
				} else {
					chrome.app.window.current().maximize();

				}
				break;
		}
	}
	};

	return new MainController();
})();
