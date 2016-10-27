import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  name: validator('presence', true),
  password: [
    validator('presence', true),
    validator('length', {
      min: 6
    })
  ],
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
  password_confirmation: [
    validator('presence', true),
    validator('confirmation', {
      on: 'password',
      message: '{description} do not match',
      description: 'Passwords'
    })
  ]
});


export default DS.Model.extend(Validations,{
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string', { defaultValue: "" }),
  password_confirmation: DS.attr('string', { defaultValue: "" }),
  posts: DS.hasMany('post' , { async: true })
  
  
});
