/**
 * @author Valik
 */
var Start = Backbone.View.extend({
    ggg: {
        "click": "check" // Обработчик клика на кнопке "Проверить"
    },
    
    initialize: function () {
    	debugger
    	this.delegateEvents (this.ggg);
    },
    
    start : function () {},
    
    check: function () {
    	alert('test')
    	debugger
        if (this.el.find("input:text").val() == "test") // Проверка текста
            controller.navigate("success", true); // переход на страницу success
        else
            controller.navigate("error", true); // переход на страницу error
    }
});

var Controller = Backbone.Router.extend({
    routes: {
        "": "start", // Пустой hash-тэг
        "success": "success", // Блок удачи
        "error": "error" // Блок ошибки
    },

    start: function () {
    	debugger
    	new Start({el : $("#home")});
        $(".block").hide(); // Прячем все блоки
        $("#start").show(); // Показываем нужный
    },

    success: function () {
        $(".block").hide();
        $("#success").show();
    },

    error: function () {
        $(".block").hide();
        $("#error").show();
    }
});

var controller = new Controller(); // Создаём контроллер

Backbone.history.start();  // Запускаем HTML5 History push 



var Start = Backbone.View.extend({
    el: $("#start"), // DOM элемент widget'а
    events: {
        "click .button": "check" // Обработчик клика на кнопке "Проверить"
    },
    
    initialize: function () {
    	this.delegateEvents (events);
    },
    
    check: function () {
    	alert('test')
    	debugger
        if (this.el.find("input:text").val() == "test") // Проверка текста
            controller.navigate("success", true); // переход на страницу success
        else
            controller.navigate("error", true); // переход на страницу error
    }
});



  