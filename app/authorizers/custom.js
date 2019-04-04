import Base from 'ember-simple-auth/authorizers/base';
import Ember from 'ember';
import { inject as service } from '@ember/service';

export default Base.extend({

  session: service(),

  authorize(data, block) {
    if (this.get('session.isAuthenticated') && data.token) {
      block('Authorization', data.token);
    }
  }

});
