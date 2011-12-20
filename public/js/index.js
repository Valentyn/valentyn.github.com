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
	        if (Views.start != null) {
	            Views.start.render();
	        }
	    },
	
	    success: function () {
	        if (Views.success != null) {
	            Views.success.render();
	        }
	    },
	
	    error: function () {
	        if (Views.error != null) {
	            Views.error.render();
	        }
	    }
	});
})();

(function () {
	Start = Backbone.View.extend ({
		el: $('#home'),
		
		template: _.template($('#start').html()),
		
		events : {
			"click input:button": "_onButtonClick"
		},
		
		_onButtonClick : function () {
	    	AppState.username = this.el.find("input:text").val(); // Сохранение имени пользователя
	        if (_.detect(Family, function (elem) { return elem == AppState.username; })) // Проверка имени пользователя
	            controller.navigate("success", true); // переход на страницу success
	        else
	            controller.navigate("error", true); // переход на страницу error	
	   },
	   
	   render: function () {
			$(this.el).html(this.template({}));
	   }
	   
	});
})();

(function () {
	Success = Backbone.View.extend ({
	
		el: $('#home'),
			
		template: _.template($('#success').html()),
		
		render: function () {
		  	$(this.el).html(this.template({}));
		}
	});
})();

(function () {
	Error = Backbone.View.extend({
		
		el: $('#home'),
		
		template: _.template($('#error').html()),
		
		render: function () {
		  	$(this.el.html(this.template({})))
		}
	});
})();

$(document).ready(function () {
	
	Views = { 
        start: new Start(),
        success: new Success(),
        error: new Error()
    };
    
    Family = ["Валик", "Андрей", "Ника"];
	
	AppState = {
	    username: ""
	};

	controller = new Controller(); // Создаём контроллер
	Backbone.history.start();  // Запускаем HTML5 History push 
});




  