import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  content: [
    validator('presence', true),
    validator('length', {
      max: 100000
    })
  ]
});


export default DS.Model.extend(Validations,{
  content: DS.attr('string'),
  created_at: DS.attr('date'),
  user: DS.belongsTo('user', { async: true })
});
