import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
        updateUser: function() {
        	store.findRecord('user', id).then(function(user) {
			var name = this.get('name');
            var email = this.get('email');
            var password = this.get('password');
            var password_confirmation = this.get('passwordConfirmation');
			
			user.set('name', name);
			user.set('name', email);
			user.set('name', password);
			user.set('name', password_confirmation);
			user.save(); // => PATCH to '/user/id'
			});
        }
    }
});