(function() {
    var getBlobURL = (window.URL && URL.createObjectURL.bind(URL)) || (window.webkitURL && webkitURL.createObjectURL.bind(webkitURL)) || window.createObjectURL;
    window.localStorage = chrome.storage;
    var editor;
    function init() {
        window.addEventListener('load', onLoad);
    }

    function onLoad() {
        // Localise.langList=['de-de','ar-eg'];
        Localise.addEventListener('complete', onLocalised);
        Localise.load(DataModel);
    }

    function onLocalised() {
        Localise.removeEventListener('complete', onLocalised);
        bindData();
       
        
		MarkdownController.init();
		CoreModel.init();
		MainController.init();
		 // chrome.storage.sync.remove('userdata');
		 // chrome.storage.local.clear();
// chrome.storage.sync.clear();
LocalSaveService.load();
		
    }

    function bindData() {
        DataBinder.bind(DataModel);
    }


    window.onLangChange = function(lang) {
        Localise.load(DataModel, lang, true);

    };
    init();

})();
