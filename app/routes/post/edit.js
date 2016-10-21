import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
	model(){
        return {};
   },
	actions: {
    	editPost: function (model) {
    		let post = this.set('post', this.modelFor('post'));
			post.set('content', model.content);
	        post.save();
       }
  }
});
