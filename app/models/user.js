import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string', { defaultValue: "" }),
  password_confirmation: DS.attr('string', { defaultValue: "" }),
  posts: DS.hasMany('post' , { async: true })
  
  
});
