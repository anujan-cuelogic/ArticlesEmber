import Route from '@ember/routing/route';

import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend({
  session: Ember.inject.service(),
  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      this.replaceWith('index');
    }
  },
});
