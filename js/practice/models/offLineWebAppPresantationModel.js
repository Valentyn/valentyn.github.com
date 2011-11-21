(function () {
	
	offLineWebAppPresantationModel = Model.extend({
	
		FIELDS : _.extend({}, Model.prototype.FIELDS, {
			ITEMS : 'items'
		}),
				
		initialize : function (options) {
			Model.prototype.initialize.call(this, options);
			var root  = this;
			var key   = 'offLineApp';
			
			this.url  = '/ajax';
			
			//FIXME: добавить прогресс бар
			if (!this._getItem(key)) {			
				this.save().complete(function (resp) {
					var result =  eval( '(' + resp.responseText + ')');
					root._setItem(key, result);
				});
			}
			this.set(this._getItem(key));
		},
		
		/**
		* Set data to localStorage as String
		*
		* @param key {String}
		* @param value {Object}
		*/
		_setItem : function (key, value) {
			localStorage.setItem(key, JSON.stringify(value));
		},
		
		/**
		* Get data to localStorage as Object
		*
		* @param key {String}
		* @return {Object}
		*/
		_getItem : function (key) {
			return JSON.parse(localStorage.getItem(key));
		},		
		
		/**
		* Get data for the current page
		*
		* @param key {String}
		* @return {Object}
		*/
		getData : function (key) {
			if (this.get(this.FIELDS.ITEMS)[key]) {
				return this.get(this.FIELDS.ITEMS)[key];
			} else {
				
			}
			
		}
	});
})();
