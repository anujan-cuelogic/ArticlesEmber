import Controller from '@ember/controller';
import config from '../config/environment';
import { inject as service } from '@ember/service';

const { RSVP: { Promise }, $: { ajax }, run } = Ember;

export default Controller.extend({

  store: service(),
  session: service(),
  currentUser: service('currentUser'),
  articleCount: Ember.computed.alias('model.user.articles.length'),
  bioComponent: 'user-bio',
  // bioText: '',

  actions: {
    editBio(user) {
      this.set('bioText', user.bio);
      this.set('bioComponent', 'edit-bio');
    },

    updateBio(user, bioText) {
      const requestOptions = {
        url: (config.host + '/users/' + user.id + '/update_profile/'),
        type: 'PUT',
        data: JSON.stringify({bio: bioText}),
        contentType: 'application/json',
        headers: {Authorization: this.get('session.data.authenticated.token')},
        dataType: 'json'
      };
      return new Promise((resolve, reject) => {
        ajax(requestOptions).then((response) => {
          // Wrapping aync operation in Ember.run
          user.set('bio', bioText);
          this.set('bioComponent', 'user-bio');
        }, (error) => {
          // Wrapping aync operation in Ember.run
          run(() => {
            reject(error);
          });
        });
      });
    },

    closeEditor() {
      this.set('bioComponent', 'user-bio');
    }
  }
});
