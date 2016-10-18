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
  this.route('posts', function() {
    this.route('new');
  });
  this.route('user', {path: '/:id/posts'});
  this.route('new_post');
  this.route('post',{path: '/posts/:id'});
});

export default Router;
