import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
	model(params) {
    	return this.get('store').queryRecord('user', {name: params.user_name});
    	
  }
});
