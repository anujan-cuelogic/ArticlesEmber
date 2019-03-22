import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      user: this.get('store').find('user', 1)
    }
    // return this.store.findAll('user');
  }
});
