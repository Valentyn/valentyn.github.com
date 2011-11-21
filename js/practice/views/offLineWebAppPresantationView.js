(function () {

	var URL = 'js/offlinewebapp/templates/',
		EJS = '.ejs',
		NEXT_PAGE = 'nextPage',
		PREVIOUS_PAGE = 'previousPage';

    offLineWebAppPresantationView = View.extend({		
		
		/**
		 * @param options = {
		 * 		conteinerId : conteinerId, 
		 * 		page : page, 
		 * 		id : id
		 * 	}
		 */
        initialize : function (options) {
            this._options = options;
            View.prototype.initialize.call(this, options);			
			this._delegeteKeyEvents();
        },
		
		EVENTS : {
			NAVIGATE : "navigate"
		},
				
		_domEvents : {
			"click"      : "_showNextPage",
			"touchstart" : "_onStartTouch",
            "touchmove"  : "_onMoveTouch"
		},
        
        start : function () {
			//alert('adsad')
		},
		
		stop : function () {
			 this.el.empty();
		},
		
		_showNextPage : function () {
			this._navigate(NEXT_PAGE);
		},
		
		_showpreviousPage : function () {
			this._navigate(PREVIOUS_PAGE);
		},
		
		_selectPage : function (event) {
			this._options.params = this._options.params || '';
			this._options.nextPage = this._options.nextPage || '';
			this._options.previousPage = this._options.previousPage || '';

			if (event.keyCode === 37 && this._options.previousPage) {			
				this._navigate(PREVIOUS_PAGE);
			}
			if (event.keyCode === 38 && this._options.previousPage) {				
				this._navigate(PREVIOUS_PAGE);
			}
			if (event.keyCode === 39 && this._options.nextPage) {
				this._navigate(NEXT_PAGE);
				return;
			}
			if (event.keyCode === 40 && this._options.nextPage) {
				this._navigate(NEXT_PAGE);
			}			
		},
		
		_delegeteKeyEvents : function () {
			$(document).bind('keydown', $.proxy(this._selectPage, this));
		},
		
		_navigate : function (page) {
			this.trigger(this.EVENTS.NAVIGATE, page);
		},
		
		_onStartTouch : function (event) {
			event.preventDefault();
			e = window.event.targetTouches[0];
			this._startPageX = e.pageX;
		},
		
		_onMoveTouch : function (event) {
			event.preventDefault();
			e = window.event.targetTouches[0];
			var movePageX = e.pageX - this._startPageX;
			if (movePageX < -300) {
				this._navigate(NEXT_PAGE);
			} else if (movePageX > 300) {
				this._navigate(PREVIOUS_PAGE);
			}
		},
		
		render : function (options) {
			this._options = options;
            var template = _.template(this.getTemplate(URL + options.id + EJS));           
            this.el.append(template(options));
			this.enableEventHandlers(this._domEvents);
        }
    });    
})();
