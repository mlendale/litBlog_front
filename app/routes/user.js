import Ember from 'ember';

const { inject: { service }, Component } = Ember;

export default Ember.Route.extend({
  session:     service('session'),
  currentUser: service('current-user'),
  
  model(params) {
    return this.store.find('user',params.id); 
  }
});

