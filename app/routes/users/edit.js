import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin,{
	currentUser: service(),
	visitedUser: service('visited-user'),
	model(params) {	
		//Only authentified user can modify their info so user should be loaded
		let user=this.get('store').peekAll('user').findBy('name', params.user_name);		
		
		if(user){
			// Set to the visited-user service the post owner according to the route
			this.get('visitedUser').visit(user.id);
		return user;
		}
 }
});
