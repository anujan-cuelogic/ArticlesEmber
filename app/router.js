import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('home');
  this.route('new-article');
  this.route('edit-article', {path: 'user/:user_id/article/:article_id'});
  this.route('profile-picture');
  this.route('users');
  this.route('user', {path: '/user/:user_id'}, function() {
    this.route('followers');
    this.route('following');
  });

  this.route('signup');
});

export default Router;
