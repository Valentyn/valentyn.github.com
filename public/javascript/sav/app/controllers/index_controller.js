(function () {
		   
	var Controller = sav.common.controllers.Controller,
	    IndexModel = sav.app.models.IndexModel;

	sav.app.controllers.IndexController = Controller.extend({
	
		initialize : function (options) {			
			options.className = "app_index_controller";
			Controller.prototype.initialize.call(this, options);
			this.options = options;
			this.model = new sav.app.models.IndexModel(options) || {};
			this.model.bind('change:' + this.model.FIELDS.PASSWORD, $.proxy(this.updatePasswordFields, this));
			this.model.bind('change:' + this.model.FIELDS.RE_PASSWORD, $.proxy(this.updatePasswordFields, this));
		},
		
		start : function () {
			var options = {
				template : this.model.getTemplateName(),
				data : this.model.toJSON(), 
				context : this.model.context
			};
			this.render(options)
			this.delegateEvents(this.domEvents);
		},
		
		stop : function () {
			
		},
		
		domEvents : {
			'change #first_name' 	: 'setFirstName',
			'change #last_name' 	: 'setLastName',
			'change #login' 		: 'setLogin',
			'change #email' 		: 'setEmail',
			'change #password' 		: 'setPassword',
			'change #re_password' 	: 'setRePassword',
			'click  #singin' 		: 'onSingInButtonClickHandler'
		},
		
		delegateModelEvents : function () {
			this.model.bind('change:' + this.model.FIELDS.FIRST_NAME, $.proxy(this.updateFirstNameFild, this));
		},
		
		setFirstName : function (e) {
			this.model.setFirstName(e.target.value);
		},
		
		setLastName : function (e) {
			this.model.setLastName(e.target.value);	
		},
		
		setLogin : function (e) {
			this.model.setLogin(e.target.value);	
		},
		
		setEmail : function (e) {
			this.model.setEmail(e.target.value);	
		},
		
		setPassword : function (e) {
			this.model.setPassword(e.target.value);	
		},
		
		setRePassword : function (e) {
			this.model.setRePassword(e.target.value);	
		},
		
		updateFirstNameField : function () {
			//alert(this.model.getFirstName())
		},
		
		onSingInButtonClickHandler : function () {
			this.model.validation();
		},
		
		updatePasswordFields : function () {
			$('#password')[this.model.isPasswordsCorrect() ? 'removeClass' : 'addClass']('incorrect');
			$('#re_password')[this.model.isPasswordsCorrect() ? 'removeClass' : 'addClass']('incorrect');
			
		}
	});
})();