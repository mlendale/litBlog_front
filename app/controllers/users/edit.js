import Ember from 'ember';

const { inject: { service }, Component } = Ember;

export default Ember.Controller.extend({
	session: Ember.inject.service('session'),
	currentUser: service('current-user'),
	routing: Ember.inject.service('-routing'),
	
	actions: {
		saveFromForm(user){
			var self = this;

			function transitionToUser() {
  			self.transitionToRoute('users.show.posts', user.name);
			}

			let editedUser = user;
			editedUser.save().catch((error) => {
				this.set('errorMessage', error);
			});
			//editedUser.reload();
		}
	}
});
