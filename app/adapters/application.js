import Ember from 'ember';
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
//import ENV from "../config/environment";
const { underscore, pluralize } = Ember.String;

export default  DS.JSONAPIAdapter.extend(DataAdapterMixin,{
  namespace: 'api/v1',
  host: 'http://localhost:3000',
  //authorizer: 'authorizer:devise',
  authorizer:'authorizer:application',

  // allows the multiword paths in urls to be underscored
  pathForType: function(type) {
    let underscored = underscore(type);
    return pluralize(underscored);
  }

});