import Ember from 'ember';

const { inject: { service }, Component } = Ember;

export default Component.extend({
  session:     service('session'),
  currentUser: service('current-user'),
  actions :{
  	deletePost(){
  	  let deletedPost = this.get('post');
  	  console.log(deletedPost.id)
  	  deletedPost.destroyRecord();
  	  //deletedPost.save;
  	}
  },
  // Allows to check if the authenticated user is the owner of the post
  // There should be a way to define this more globally in order to DRY the code
  isCorrectUser: Ember.computed('post.user.id', function(){
  	let user_id=this.get('session.data.authenticated.user_id')
  	return user_id==this.get('post.user.id');
  })

});
