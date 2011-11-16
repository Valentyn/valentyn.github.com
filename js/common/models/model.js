(function () {
	
	Model = Backbone.Model.extend({
		
		/**
		 * This map represents the states a model object can have.
		 */
		STATES : { NEW_     : 0,   // Created on the client.
				   MODIFIED : 1,   // Modified on the client.
				   CLEAN    : 2,   // Untouched on the client.
				   DELETED  : 3},  // Deleted on the client.

		/**
		 * This map contains the model's attribute names.
		 */
		FIELDS : { ID                : 'id',
				   STATE             : 'state', // The models current state.
				   CLIENT_CREATE_DATE: 'ccdate',
				   CLIENT_MOD_DATE   : 'cmddate'},


		/**
		 * Create a new model with the given attributes.
		 *
		 * @param attributes: a mapping of field names to attributes.
		 */
		
		initialize : function (attributes) {
			var FIELDS = this.FIELDS;
			var STATES = this.STATES;			
			
			this.cid = this._uniqueId('SoftServe');
			this.id  = attributes.id || this.cid;			
		},
		
		/**
		 * Generate a globally unique id for client side models or DOM elements. It
		 * should be unique across page loads. The prefix will be appended to it.
		 */
		_uniqueId : function (prefix) {
			var sessionStartTime = new Date().getTime();
			return _.uniqueId(prefix + '_' + sessionStartTime + '_');
		}		
	});
})();
