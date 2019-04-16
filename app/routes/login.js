import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

// import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend({
  session: service(),
  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      this.replaceWith('index');
    }
  },
});
