import Service from '@ember/service';

import Ember from 'ember';

const { inject: { service }, RSVP } = Ember;

export default Ember.Service.extend({
  session: service('session'),
  store: service(),

  load() {
    var userId = this.get('session.data.authenticated.userId');
    if (userId) {
      this.set('userId', userId);
    } else {
      this.get('session').invalidate();
    }
  }
});
