import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import config from '../config/environment';

const { RSVP: { Promise }, $: { ajax }, run } = Ember;

export default Base.extend({

  tokenEndpoint: config.host + '/authentication/login',

  store: Ember.inject.service(),

  restore(data) {
    return new Promise((resolve, reject) => {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(creds) {
    const { identification, password } = creds;
    const data = JSON.stringify({username: identification, password});
    const requestOptions = {
      url: this.tokenEndpoint,
      type: 'POST',
      data,
      contentType: 'application/json',
      dataType: 'json'
    };
    return new Promise((resolve, reject) => {
      ajax(requestOptions).then((response) => {
        // Wrapping aync operation in Ember.run
        run(() => {
          resolve({
            token: response.token, userId: response.user_id
          });
        });
        this.get('store').push(response.user)
      }, (error) => {
        // Wrapping aync operation in Ember.run
        run(() => {
          reject(error);
        });
        this.get('session').invalidate();
      });
    });
  },

  invalidate(data) {
    return Promise.resolve(data);
  }
});
