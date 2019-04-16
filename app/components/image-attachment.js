import Component from '@ember/component';
import config from '../config/environment';
import { inject as service } from '@ember/service';
import { run } from '@ember/runloop';
import { Promise } from 'rsvp';

const { $: { ajax } } = Ember;

export default Component.extend({

  session: service(),
  currentUser: service('currentUser'),
  router: service(),

  actions: {
    async upload() {
      var file = $('input[name="avatar"]')[0].files[0];
      const currentUserId = this.get('currentUser.userId');
      const reader = new FileReader();

      reader.onload = (e) => {
        let imageData = reader.result;
        const requestOptions = {
          url: (config.host + '/users/' + currentUserId + '/profile_picture'),
          type: 'PUT',
          data: JSON.stringify({profile_picture: imageData}),
          contentType: 'application/json',
          headers: {Authorization: this.get('session.data.authenticated.token')},
          dataType: 'json'
        };

        return new Promise((resolve, reject) => {
          ajax(requestOptions).then((response) => {
            this.set('errorMsg', '');
            this.get('router').transitionTo('user', currentUserId);
          });
        });
      };

      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.set('errorMsg', 'Please attach a picture')
      }
    }
  }

});
