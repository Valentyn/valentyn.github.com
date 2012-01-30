/**
 * @author Valik
 */


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
	   
	   render: function () {
	   		var state = this.model.get("state");
	   		$(this.el).html(this.templates[state](this.model.toJSON()));
	   		return this;
	   }
	   
	});
	
	dickingView = new View({model: appState});
	
})();




	
	  




  