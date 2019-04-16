import Route from '@ember/routing/route';

import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

import { inject as service } from '@ember/service';

export default Route.extend(ApplicationRouteMixin, {

  session: service(),

  currentUser: service('currentUser'),

  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      this.replaceWith('login');
    } else {
      return this._loadCurrentUser();
    }
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser();
  },

  _loadCurrentUser() {
    return this.get('currentUser').load();
  },

  model() {
    // return {currentUserId: this.get('currentUser.userId')}
  },

  actions: {
    invalidateSession: function() {
      this.get('session').invalidate();
    }
  }
});
