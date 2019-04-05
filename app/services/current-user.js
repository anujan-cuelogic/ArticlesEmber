import Service from '@ember/service';
import Ember from 'ember';
import { inject as service } from '@ember/service'

export default Service.extend({

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
