import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(ApplicationRouteMixin,{
	session:     service('session'),
    currentUser: service('current-user'),
	model: function () {
    
        return {};
   },
    actions: {
    	createPost: function (model) {
	    	let user=this.get('currentUser.user');
			let post = this.get('store').createRecord('post', {
	        content: model.content,
	        user: user
	        });
	        //user.save();
	        user.get('posts').addObject(post);
	        post.save().then(function(){
	        	user.save();
	        });
       }
  }
});
 