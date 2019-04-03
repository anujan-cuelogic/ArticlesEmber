import Component from '@ember/component';
import { inject as service } from '@ember/service';
import config from '../config/environment';
const { RSVP: { Promise }, $: { ajax }, run } = Ember;

export default Component.extend({
  store: service(),
  currentUser: service('currentUser'),
  bioEdited: false,
  updatedBio: '',
  actions: {
    onClickEditBioIcon() {
      this.set('updatedBio', this.user.bio);
      this.set('bioEdited', true);
    },
    onClickSaveBioIcon() {
      const userId = this.currentUser.userId;
      const data = JSON.stringify({ bio: this.updatedBio, id: this.currentUser.userId });
      const requestOptions = {
        url: config.host + '/update_user',
        type: 'POST',
        data,
        contentType: 'application/json',
        dataType: 'json'
      };
      return new Promise((resolve, reject) => {
        ajax(requestOptions).then((response) => {
          // Wrapping aync operation in Ember.run
          this.set('user.bio',this.updatedBio);
          this.set('bioEdited', false);
        }, (error) => {
          // Wrapping aync operation in Ember.run
          run(() => {
            reject(error);
          });
        });
      });
    },
    onClickCloseBioIcon() {
      this.set('bioEdited', false);
    }
  },
});
