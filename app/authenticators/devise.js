import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Devise.extend({  
  serverTokenEndpoint: 'http://localhost:3000/api/v1/login'
});
