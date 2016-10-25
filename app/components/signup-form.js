import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({  
  session: service('session'),
  

  actions: {
    submit(){
      let user = this.get('user');
      this.attrs.triggerSave(user);
    }
 },
 
 // Allows to check if the authenticated user is the owner of the post
  // There should be a way to define this more globally in order to DRY the code
  isCorrectUser: Ember.computed('model.user.name', function(){
  	let user_name=this.get('session.data.authenticated.user_name')
  	return user_name==this.get('model.user.name');
  })
});