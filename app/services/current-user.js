import Ember from 'ember';

const { inject: { service }, isEmpty, RSVP } = Ember;

export default Ember.Service.extend({
  session: service('session'),
  store: service(),

  load() {
    return new RSVP.Promise((resolve, reject) => {
      let userName = this.get('session.data.authenticated.user_name');
      if (!isEmpty(userName)) {
        this.get('store').find('user', userName).then((user) => {
          this.set('user', user);
          resolve();
        }, reject);
      } else {
        resolve();
      }
    });
  }
});