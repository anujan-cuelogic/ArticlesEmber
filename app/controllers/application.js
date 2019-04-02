import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  currentUserId: Ember.computed.alias('model.currentUserId'),
});
