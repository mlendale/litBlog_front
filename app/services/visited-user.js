import Ember from 'ember';

export default Ember.Service.extend({
  user_id: null,

  init() {
    this._super(...arguments);
    this.set('user_id', null);
  },
  visit(user_id){
  	this.set('user_id',user_id);
  }
});
