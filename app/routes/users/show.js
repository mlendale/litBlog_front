import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
    	return this.get('store').queryRecord('user', {name: params.user_name});
    	
  }
});
