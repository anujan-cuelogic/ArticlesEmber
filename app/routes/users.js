import Route from '@ember/routing/route';

export default Route.extend({
  session: Ember.inject.service(),
  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      this.replaceWith('login');
    }
  },
  model() {
    return {users: this.store.findAll('user')};
  }
});
