import Ember from 'ember';

const { inject: { service }, Component } = Ember;

export default Component.extend({
  session:     service('session'),
  currentUser: service('current-user'),
   
  actions: {
    deletePost(post_id) {
      	//post.destroyRecord();
      	this.store.findRecord('post', post_id, { backgroundReload: false }).then(function(post) {
  		post.destroyRecord();
		});
        
    },
    
  }
});