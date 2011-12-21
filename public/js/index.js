/**
 * @author Valik
 */



(function () {
	Controller = Backbone.Router.extend({
		
	    routes: {
	        "": "start", // Пустой hash-тэг
	        "success": "success", // Блок удачи
	        "error": "error" // Блок ошибки
	    },	    
	
	    start: function () {
	    	debugger
	        appState.set({ state : "start"});
	    },
	
	    success: function () {
	        appState.set({ state : "success"});
	    },
	
	    error: function () {
	        appState.set({ state : "error"});
	    }
	});
})();

(function () {
	Block = Backbone.View.extend ({
		el: $('#home'),
		
		initialize: function  () {
			this.model.bind("change", $.proxy( this.render, this));
		},
		
		templates: {
			"start" : _.template($('#start').html()),
			"error" : _.template($('#error').html()),
			"success" : _.template($('#success').html()),
		},
		
		events : {
			"click input:button": "_onButtonClick"
		},
		
		_onButtonClick : function () {
	    	var username = this.el.find("input:text").val(); // Get user's age
	    	var find = (_.detect(Family, function (elem) { return elem == username; }))
			appState.set({
				"state": find ? "success" : "error",
				"username": username
			});	
	   },
	   
	   render: function () {
	   		var state = this.model.get("state");
	   		$(this.el).html(this.templates[state](this.model.toJSON()));
	   		return this;
	   }
	   
	});
})();

$(document).ready(function () {
    debugger
    Family = ["Валик", "Андрей", "Ника", "18", "19", "20"];
	
	AppState = Backbone.Model.extend({
		defaults: {
			username: "",
			state: ""
		}	    
	}); 
	
	appState = new AppState();
	
	
	block = new Block({model: appState});
	controller = new Controller(); // Создаём контроллер
	
	appState.bind("change:state", function () {
		var state = this.get("state");
		if (state == "start") {
			controller.navigate("", true);
		} else {
			controller.navigate(state, true);
		}
	});
	
	Backbone.history.start();  
});




  