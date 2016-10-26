import Ember from 'ember';

const { inject: { service }, isEmpty, RSVP } = Ember;

export default Ember.Service.extend({
  session: service('session'),
  store: service(),

  load() {
    return new RSVP.Promise((resolve, reject) => {
      let userID = this.get('session.data.authenticated.user_id');
      if (!isEmpty(userID)) {
        this.get('store').findRecord('user', userID).then((user) => {
          this.set('user', user);
          resolve();
        }, reject);
      } else {
        resolve();
      }
    });
  }
});