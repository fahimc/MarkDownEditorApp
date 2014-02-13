var CoreModel=(function(){
	
	function CoreModel(){};
	
	CoreModel.prototype=
	{
		titleInput:null,
		init:function(){
			this.titleInput=document.getElementById('title');
		}
	};
	
	return new CoreModel();
})();
