$(document).ready(function () {
    var router = Backbone.Router.extend({
		
		initialize : function (options) {
			this._containerId = 'home';
			this._currentController = null;
        },

        routes: {
            "": "practice",
            "off-line-web-application": "practice",
            "off-line-web-application/:page": "practice",
            "off-line-web-application/:page/:id": "practice",
			"sync" : "sync"
        },

        practice : function (page, id) {
            var options = {
				containerId : this._containerId,
                page        : page,
                id          : id
            };
			if (this._currentController) {
				this._currentController.stop();
			}
            this._currentController = new practiceController(options);
			this._currentController.start();
        },
		
		sync : function () {
			console.log('this is just an example')
		}
    });
    
    var router = new router();
    Backbone.history.start()
});
