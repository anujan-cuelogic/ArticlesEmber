import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return {
      user: this.get('store').find('user', params.user_id)
    }
    // return this.store.findAll('user');
  }
});
