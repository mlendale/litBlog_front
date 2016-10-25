import Ember from 'ember';

const { inject: { service }, Component } = Ember;

export default Ember.Controller.extend({
	session: Ember.inject.service('session'),
	currentUser: service('current-user'),
	actions: {
		saveFromForm(user){
			var self = this;

			//function transitionToUser(editedUser) {
  			//self.transitionToRoute('users.show.posts', self.currentUser.user.name);
			//}

			let editedUser = user;
			editedUser.save().catch((error) => {
				this.set('errorMessage', error);
			});
			//editedUser.reload();
		}
	}
});
