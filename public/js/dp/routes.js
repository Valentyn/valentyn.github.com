$(document).ready(function () {
	
	var Router = Backbone.Router.extend({
		
	    routes: {
	        "": "start", // Пустой hash-тэг+
	        "start": "start", // Пустой hash-тэг
	        "success": "success", // Блок удачи
	        "error": "error" // Блок ошибки
	    },	    
	
	    start: function () {
	        appState.set({ state : "start"});
	    },
	
	    success: function () {
	        appState.set({ state : "success"});
	    },
	
	    error: function () {
	        appState.set({ state : "error"});
	    }
	});
	
	router = new Router();
	Backbone.history.start();
});

