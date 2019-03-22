import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return {user: this.store.find('user', params.user_id)}
    // user: this.store.findRecord('user', 1);
  }

});
