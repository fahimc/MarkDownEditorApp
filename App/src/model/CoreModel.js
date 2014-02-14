var CoreModel=(function(){
	
	function CoreModel(){};
	
	CoreModel.prototype=
	{
		titleInput:null,
		userInput:null,
		init:function(){
			this.titleInput=document.getElementById('title');
			this.userInput = document.getElementById('userInput');
		}
	};
	
	return new CoreModel();
})();
