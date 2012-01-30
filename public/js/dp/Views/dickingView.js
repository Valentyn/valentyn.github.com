/**
 * @author Valik
 */

var URL = "public/js/dp/Templates/",
	EJS = ".ejs";

(function () {
	View = Backbone.View.extend ({
		el: $('#home'),
		
		initialize: function  () {
			this.model.bind("change", $.proxy( this.render, this));
		},
		
		templates: {
			"start" : _.template($('#start').html()),
			"error" : _.template($('#error').html()),
			"success" : _.template($('#success').html()),
		},
		
		events : {
			"click input:button": "_onButtonClick"
		},
		
		_onButtonClick : function () {
	    	this._age = Number(this.el.find("input:text").val()); // Get entered age

			appState.set({
				"state": this._ageCheck() ? "success" : "error"
			});	
	   },
	   
	   _ageCheck : function () {
	   		return this._age > 18;
	   },
	   
	   getTemplate : function (url) {
			var ejs = '';
			$.ajaxSetup({
				async : false
			});
			$.ajax({
				url : url,
				success : function (result) {
					ejs = result;
				}
			});
			return ejs;
	   },
	   
	   render: function () {
	   		var state = this.model.get("state");
	   		var template = _.template(this.getTemplate(URL + state + EJS));
	   		$(this.el).append(template);
	   		return this;
	   }
	   
	});
	
	dickingView = new View({model: appState});
	
})();




	
	  




  