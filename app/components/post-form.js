import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({  
  session: service('session'),
  
  actions: {
        createPost: function (model) {
        	this.sendAction('createPost', model);

		      // Clear each input field
		      this.set('newPost.content', null);
        }
    }
});
