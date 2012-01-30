
(function () {
	
	AppState = Backbone.Model.extend({		
		defaults: {
			name: "",
			state: "Start"
		}	    
	});
	
	appState = new AppState();
	
	appState.bind("change:state", function () {
		var state = this.get("state");
		router.navigate(state, true);
	});
	
})();

