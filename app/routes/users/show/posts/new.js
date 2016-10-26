import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin,{
	session:     service('session'),
    currentUser: service('current-user'),
	model: function () {
		let user=this.get('store').peekRecord('user',this.get('session.data.authenticated.user_id'));
        return this.get('store').createRecord('post', {user:user});
   }
});