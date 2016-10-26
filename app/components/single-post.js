import Ember from 'ember';

const { inject: { service }, Component } = Ember;

export default Component.extend({
  session:     service('session'),
  currentUser: service('current-user'),

  // Allows to check if the authenticated user is the owner of the post
  // There should be a way to define this more globally in order to DRY the code
  isCorrectUser: Ember.computed('post.user.id', function(){
  	let user_id=this.get('session.data.authenticated.user_id')
  	return user_id;
  	//return user_name==this.get('post.user.name');
  	return false
  })

});
