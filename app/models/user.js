import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  password_confirmation: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
  posts: DS.hasMany('post', {async: true})
  
  
});
