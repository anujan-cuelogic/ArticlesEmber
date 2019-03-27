import Route from '@ember/routing/route';

import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { service } = Ember.inject;


export default Route.extend(ApplicationRouteMixin, {
  session: Ember.inject.service(),
  actions: {
    invalidateSession: function() {
        this.get('session').invalidate();
    }
  }
});
