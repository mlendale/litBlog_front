import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({  
  session: service('session'),
  
  actions: {
    submit(){
      let post = this.get('post');
      this.attrs.triggerSave(post);
    }
 }
});
