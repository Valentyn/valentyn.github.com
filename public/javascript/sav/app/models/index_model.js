(function () {

	/**
	 * Generate a globally unique id for client side models or DOM elements. It
	 * should be unique across page loads. The prefix will be appended to it.
	 */
	var VIEWS_DIR = 'public/javascript/sav/app/views/',
		TEMPLATE = 'singIn.html',
	
	    __uniqueId = function  (prefix) {
			var sessionStartTime = new Date().getTime();
			return _.uniqueId(prefix + '_' + sessionStartTime + '_');
		};

	sav.app.models.IndexModel = Backbone.Model.extend({
	
		/**
		 * Constructor
		 */
		initialize : function (options) {
			var attr = {};
			options = options || {};
			this.cid = __uniqueId('c');
			this.id  = options.id || this.cid;
			this.lang = options.lang || "eng";
			this.context = repo[this.lang].registration;
			
			this.set(attr, {silent: true});
		},
		
		FIELDS : {
			ID : 'id',
			FIRST_NAME : 'first_name',
			LAST_NAME : 'last_name',
			LOGIN : 'login',
			EMAIL : 'email',
			PASSWORD : 'password',
			RE_PASSWORD : 're_password'
		},
		
		defaults : {
            'first_name'   : "",
            'last_name'   : "",
			'login'      : "",
			'email'      : "",
			'password'   : "",
			're_password' : ""	
        },
		
		setOne: function (attr, value, options) {
			options = options || {};
			var attrs = {};
			attrs[attr] = value;
			this.set(attrs, options);
		},
		
		setFirstName : function (value) {
			this.setOne(this.FIELDS.FIRST_NAME, value);
		},
		
		getFirstName : function () {
			return this.get(this.FIELDS.FIRST_NAME);
		},
		
		setLastName : function (value) {
			this.setOne(this.FIELDS.LAST_NAME, value);
		},
		
		getLastName : function () {
			return this.get(this.FIELDS.LAST_NAME);
		},
		
		setLogin : function (value) {
			this.setOne(this.FIELDS.LOGIN, value);
		},
		
		getLogin  : function () {
			return this.get(this.FIELDS.LOGIN);
		},
		
		setEmail : function (value) {
			this.setOne(this.FIELDS.EMAIL, value);
		},
		
		getEmail  : function () {
			return this.get(this.FIELDS.EMAIL);
		},
		
		setPassword : function (value) {
			this.setOne(this.FIELDS.PASSWORD, value);
		},
		
		getPassword  : function () {
			return this.get(this.FIELDS.PASSWORD);
		},
		
		setRePassword : function (value) {
			this.setOne(this.FIELDS.RE_PASSWORD, value);
		},
		
		getRePassword  : function () {
			return this.get(this.FIELDS.RE_PASSWORD);
		},
		
		getTemplateName : function () {
			return VIEWS_DIR + TEMPLATE;
		},
		
		isPasswordsCorrect : function () {
			if (!this.get(this.FIELDS.PASSWORD) || !this.get(this.FIELDS.RE_PASSWORD)) {
				return true;
			} else {
				return this.get(this.FIELDS.PASSWORD) === this.get(this.FIELDS.RE_PASSWORD) &&
				this.get(this.FIELDS.PASSWORD).length >= 5;
			}
			
		},
		
		validation : function () {
			var errors = [];
			
			if (!this.getFirstName()) {errors.push(this.context.error_first_name)}
			if (!this.getLastName()) {errors.push(this.context.error_last_name)}
			if (!this.getLogin()) {errors.push(this.context.error_login)}
			if (!this.getEmail()) {errors.push(this.context.error_email)}
			if (!this.getPassword()) {errors.push(this.context.error_password)}
			if (!this.getRePassword()) {errors.push(this.context.error_password)}
			if (this.getPassword() !== this.getRePassword()) {errors.push(this.context.error_password)}
			
			if (errors.length) {
				alert(errors)	
			} else {
				alert('go to next page')	
			}
		}
	});
	
	sav.app.models.IndexModel.extend = Backbone.Collection.extend;	
})();