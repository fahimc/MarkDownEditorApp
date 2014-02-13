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
       
        setListeners();
		MarkdownController.init();
		CoreModel.init();
		MainController.init();
    }

    function setListeners() {
        // document.getElementById('downloadButton').addEventListener('click', function() {
            // editor.save();
            // var theContent = editor.exportFile();
            // var blob = new Blob([theContent], {
                // type : "text/plain;charset=utf-8"
            // });
            // var filesaver = window.saveAs(blob, document.getElementById('title').value+".md");
// 
        // });
    }

    function bindData() {
        DataBinder.bind(DataModel);
    }


    window.onLangChange = function(lang) {
        Localise.load(DataModel, lang, true);

    };
    init();

})();
