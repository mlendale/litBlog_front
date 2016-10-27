import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin,{
	session:     service('session'),
    currentUser: service('current-user'),
    visitedUser: service('visited-user'),
    
	model: function (params) {
		var user_name = this.paramsFor('users.show').user_name;		
		//let user=this.get('store').peekRecord('user',this.get('session.data.authenticated.user_id'));
		let user=this.get('store').peekAll('user').findBy('name', user_name);
		
		//Set to the visited-user service the post owner according to URI
		this.get('visitedUser').visit(user.id);
		
		return this.get('store').createRecord('post', {user:user});
		
        
   }
});