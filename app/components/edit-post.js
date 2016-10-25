import Ember from 'ember';

const { inject: { service }, Component } = Ember;

export default Component.extend({
  session:     service('session'),
  currentUser: service('current-user'),
  
  actions: {
		saveFromForm(post){
			var self = this;
			function transitionToPosts() {
       		self.transitionToRoute('users.show.posts', currentUser.user.name);
  			}
			let editedPost = post;
			editedPost.save().then(transitionToPosts).catch((error) => {
				this.set('errorMessage', error);
			});
		}
	},

  // Allows to check if the authenticated user is the owner of the post
  // There should be a way to define this more globally in order to DRY the code
  isCorrectUser: Ember.computed('model.user.name', function(){
  	let user_name=this.get('session.data.authenticated.user_name')
  	return user_name==this.get('model.user.name');
  })

});
