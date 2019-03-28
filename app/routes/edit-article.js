import Route from '@ember/routing/route';

export default Route.extend({
  session: Ember.inject.service(),
  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      this.replaceWith('login');
    }
  },
  model(params) {
    return {
      article: this.get('store').find('article', params.article_id).catch(reason => {
        this.transitionTo('index');
      }),
      user: this.get('store').find('user', params.user_id)
    }
  }
});
