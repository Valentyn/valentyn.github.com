(function () {

	//Mojno i Backbone.Router
	sav.common.controllers.Controller = Backbone.View.extend({
	
		initialize : function (options) {			
			this.el = $('#' + options.containerId);
			this.el.addClass(options.className);
		},
		
		start : function () {
			throw TypeError("Programming error: should implement in derived class: start");
		},
		
		stop : function () {
			throw TypeError("Programming error: should implement in derived class: stop");
		},
		
		getView : function (url) {
			var view = '';
			$.ajaxSetup({async : false});
			$.ajax({url : url, success : function (result) {view = result;}});
			return view;
		},
		
		render : function (options) {
            var template = _.template(this.getView(options.template));
            this.el.append(template(options));
        }
	});
})();