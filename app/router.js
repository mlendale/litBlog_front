import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts');
  this.route('login', {path: '/login'});
  this.route('users.new', {path: '/signup'});
  this.route('users', function(){
    this.route('user', { path:'/:user_id' }, function(){
      this.route('edit');
    });
    //this.route('create');
  });
  
});

export default Router;
