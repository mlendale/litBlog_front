import Ember from 'ember';

const { inject: { service }, Component } = Ember;

export default Component.extend({
  session:     service('session'),
  currentUser: service('current-user'),
  visitedUser: service('visited-user'),
  //Use the routing service which is a private API to inject route here
  routing: Ember.inject.service('-routing'),
  
  actions: {
		saveFromForm(post){
			var self = this;
			function transitionToPosts() {
       		self.get('routing').transitionTo('users.show.posts', post.user.id);
  			}
			let editedPost = post;
			//TODO test these errors
			editedPost.save().catch((error)=>{this.set('errorMessage',error)}).then(transitionToPosts).catch((error) => {
				this.set('errorMessage', error);
			});
		}
	},

  // Allows to check if the authenticated user is the owner of the post
  // There should be a way to define this more globally in order to DRY the code
  isCorrectUser: Ember.computed('model.user.id', function(){
  	var auth_user_id=this.get('session.data.authenticated.user_id');
  	var visit_user_id=this.get('visitedUser.user_id');
  	return visit_user_id==auth_user_id;
  })

});
