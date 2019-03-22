import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('new-article');
  this.route('edit-article', {path: '/article/:article_id'});
  this.route('users');
  this.route('user', {path: '/user/:user_id'}, function() {
    this.route('followers');
    this.route('following');
  });

});

export default Router;
