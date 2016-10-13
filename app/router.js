import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login', {path: '/login'});
  this.route('users.new', {path: '/signup'});
  this.route('users');
  this.route('dashboard');
  this.route('posts');
  this.route('user', {path: '/:id/posts'});
});

export default Router;
