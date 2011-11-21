(function () {

    offLineWebAppPresantationController = Controller.extend({		
		
		/**
		 * @param options = {
		 * 		conteinerId : conteinerId, 
		 * 		page : page, 
		 * 		id : id
		 * 	}
		 */
        initialize : function (options) {
            Controller.prototype.initialize.call(this, options);
            this._options = options;
            this._model   = new offLineWebAppPresantationModel({id : '1234'});			
            this._view    = new offLineWebAppPresantationView({el : this._el}); 

			this._setViewEvents();
			this.bindViewEvents(this._view, this._businessEvents);
        },
        
        /**
         * Method should start, when URL does not have parametr options.page
         */
        start : function () {
			if (this._model.getData(this._options.page)) {
				this._content = this._model.getData(this._options.page);
				this._view.render(this._content);
			} else {
				this.show404Page();
			}
		},
		
		stop : function () {
			this._view.unbind();
            this._view.stop();
		},

		_setViewEvents : function () {
			this._businessEvents[this._view.EVENTS.NAVIGATE]  = this._onNavigate;
        },
		
		_onNavigate : function (page) {
			Backbone.history.navigate('off-line-web-application/' + this._content[page], true)
		}
    });   
})();
