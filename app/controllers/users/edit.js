import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service('session'),
	actions: {
		saveFromForm(user){
			let editedUser = user;
			editedUser.save().catch((error) => {
				this.set('errorMessage', error);
			}).then(()=>{  
				//Handle Transition
			});
		}
	}
});
