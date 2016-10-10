import Ember from 'ember';

export default Ember.Controller.extend({
	 session: Ember.inject.service('session'),
	actions: {
        createUser: function() {
            var name = this.get('name');
            var email = this.get('email');
            var password = this.get('password');
            var password_confirmation = this.get('passwordConfirmation');
            

            // Create the new User
            var user = this.store.createRecord('user', {
                name: name,
                email: email,
                password: password,
                password_confirmation: password_confirmation
            });

            user.save(); 
            this.transitionToRoute('index');   
        }
    }
});
