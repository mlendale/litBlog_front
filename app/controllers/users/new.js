import Ember from 'ember';
export default Ember.Controller.extend({
	session: Ember.inject.service('session'),
	actions: {
		saveFromForm(user){
			let newUser = user;
			newUser.save().then(()=>{
				//success
				this.get('session').authenticate('authenticator:oauth2',    
				newUser.get('email'), newUser.get('password')).catch((reason) => {
					this.set('errorMessage', reason.error ||reason);
				});
			}).catch((adapterError) => {
				this.set('errorMessage', adapterError);
				
			});
		}
	} 
});