(function () {
	
    Controller = Backbone.Collection.extend({
		
        initialize : function (options) {
			this._el = options.containerId ? $('#' + options.containerId) : this.show404Page();			
			this._businessEvents = {};
			
        },
        
        /**
         * It is an abstract method. This method should start the default methods
         */        
        start : function () {
			throw TypeError("Programming error: should implement in derived class: start");
		},
		
		/**
		 * Method should start, when application does not have conteinerId
		 */
		_showError : function () {
			throw TypeError("Programming error: application does not have conteinerId");
		},
		
		show404Page : function () {
			//FIXME: it's just a quick fix. In the future will be View and Template
			this._el.html('<h1>Error 404 - Page Not Found!</h1>');
		},
		
		bindViewEvents : function (view, eventHandlerMap) {
			var bindEvent = function (eventHandler, eventName) {
				view.bind(eventName, $.proxy(eventHandler, this));
			};
			_.each(eventHandlerMap, $.proxy(bindEvent, this));
		}
    });    
    Controller.extend = Backbone.Model.extend;
})();
