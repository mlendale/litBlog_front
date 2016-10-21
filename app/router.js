import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login', {path: '/login'});
  this.route('users.new', {path: '/signup'});
  this.route('users', function() {
    this.route('show', {path: ':user_id'}, function() {
      this.route('posts', function() {
        this.route('new',{path: '/new'});
        this.route('edit',{path: '/:post_id/edit'});
      });
    });
    this.route('edit', {path: ':user_id/edit'});
  });
  this.route('dashboard');
  this.route('posts', function() {});
  this.route('post', {path: '/posts/:post_id'}, function() {
    this.route('edit');
  });
});

export default Router;
