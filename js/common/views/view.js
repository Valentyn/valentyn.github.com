(function () {

    View = Backbone.View.extend({
		
        EVENTS : {},
        
        initialize : function (options) {
			//
        },
		
		// Causes all events from another view to be
        // re-triggered from this view.
        // @param {Backbone.View} view
        bubbleUpEvents : function (view) {
            var retriggerEvent = function () {
                this.trigger.apply(this, arguments);
            };
            view.bind('all', $.proxy(retriggerEvent, this));
        },
		
		enableEventHandlers : function (events) {
            this.delegateEvents(events);
        },

        disableEventHandlers : function () {
            this.delegateEvents({});
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
		}		
    });
})();
