import Route from '@ember/routing/route';

export default Route.extend({
  session: Ember.inject.service(),
  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      this.replaceWith('login');
    }
  },
  model(params) {
    var user = this.get('store').find('user', params.user_id)
    return {
      user: user,
      articlesCount: user.numberOfArticles
    }
    // return this.store.findAll('user');
  }
});
