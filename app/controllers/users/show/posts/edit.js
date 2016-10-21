import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service('session'),
	actions: {
		saveFromForm(post){
			let editedPost = post;
			editedPost.save().catch((error) => {
				this.set('errorMessage', error);
			}).then(()=>{  
				//Handle Transition
			});
		}
	}
});
