import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

  session: service(),
  currentUser: service('currentUser'),

  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      this.replaceWith('login');
    }
  },

  model() {
    return {user: this.get('store').find('user', this.get('currentUser.userId'))}
  },

});
