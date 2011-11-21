(function () {
		   
	var HOME  = "home",
		
		/*private*/
	    __runController = function (ControllerConstructor, params) {
			var options;
			
			if (this._currentController) {
				this._currentController.stop();
			}
			this._container.empty();
			
			options = __parseParams(params);
			options.containerId = this._containerId;
	
			this._currentController = new ControllerConstructor(options);
			this._currentController.start();
		},
	
		/*private*/
		__parseParams = function (params) {
			var paramArray = params.split("&"),
			    model = {},
				keyValArray;
			_.each(paramArray, function (paramString) {
				keyValArray = paramString.split("=");
				model[keyValArray[0]] = keyValArray[1];
			});
			return model;
		};
		

	sav.app.navigation.Router = Backbone.Router.extend({
		
		initialize : function () {
			this._containerId = HOME;
			this._container = $('#' + this._containerId);
			this._currentController;			
		},

		routes: {
			"": "index",
			":params": "index"
		},

		index : function (params) {
			params = params || "";
			__runController.call(this, sav.app.controllers.IndexController, params);
		}
    });
})();