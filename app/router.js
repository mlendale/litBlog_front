import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users.new', {path: '/signup'});
  this.resource('users', function(){
    this.resource('user', { path:'/:user_id' }, function(){
      this.route('edit');
    });
    //this.route('create');
  });
  this.route('posts');

  this.route('login');
});

export default Router;
