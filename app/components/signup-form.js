import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({  
  session: service('session'),
  visitedUser: service('visited-user'),

  actions: {
    submit(){
      let user = this.get('user');
      this.attrs.triggerSave(user);
    }
 },
 
 // Allows to check if the authenticated user is the owner of the post
  // There should be a way to define this more globally in order to DRY the code
  isCorrectUser: Ember.computed('auth_user_id','visit_user_id', function(){
  	var auth_user_id=this.get('session.data.authenticated.user_id');
  	var visit_user_id=this.get('visitedUser.user_id');
  	return visit_user_id==auth_user_id;
  })
});