import Route from '@ember/routing/route';

export default Route.extend({
  session: Ember.inject.service(),
  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      this.replaceWith('login');
    }
  },
  async model() {
    await this.store.findAll('user');
    return {
      articles: this.get('store').findAll('article')
    }
  }
});
