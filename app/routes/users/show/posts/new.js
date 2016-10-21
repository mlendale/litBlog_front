import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin,{
	session:     service('session'),
    currentUser: service('current-user'),
	model: function () {
    	let user=this.get('currentUser.user');
        return this.get('store').createRecord('post');
   }
});