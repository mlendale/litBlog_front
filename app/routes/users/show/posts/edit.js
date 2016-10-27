import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin,{
	visitedUser: service('visited-user'),
	model: function (params) {
		// Get the user_name from the dynamic segment
		let user_name = this.paramsFor('users.show').user_name;			
		let user=this.get('store').peekAll('user').findBy('name', user_name);		
		let post=this.get('store').peekRecord('post',params.post_id)
		
		// Set to the visited-user service the post owner according to the route
		this.get('visitedUser').visit(user.id);				
        return post;
   }
});
