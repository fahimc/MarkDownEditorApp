var LocalSaveService = (function() {

    function LocalSaveService() {

    }


    LocalSaveService.prototype = {
        autoSave : true,
        autoSaveTime : 100,
        _timer : null,
        type : 'local',
        init : function() {

        },
        load : function() {
            var _this = this;

            chrome.storage[this.type].get('userdata', function(obj) {
                console.log(obj['userdata']);
                if (obj['userdata'])
                    CoreModel.userInput.value = obj['userdata'];
                    MarkdownController.updatePreview();
                _this.start();
            });
        },
        save : function() {
            // Save it using the Chrome extension storage API.
            chrome.storage[this.type].set({
                'userdata' : CoreModel.userInput.value
            }, function(obj) {
                // console.log('saved', CoreModel.userInput.value);
            });
        },
        start : function() {
            var _this = this;
            this.stop();
            this._timer = setInterval(function() {
                _this.onTimer();
            }, this.autoSaveTime);
        },
        stop : function() {
            if (this._timer)
                clearInterval(this._timer);
        },
        onTimer : function() {
            this.save();
        }
    };

    return new LocalSaveService();
})();
