import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import config from '../config/environment';

const { RSVP: { Promise }, $: { ajax }, run } = Ember;

export default Base.extend({

  tokenEndpoint: config.host + '/authentication/login',

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
            token: response.token
          });
        });
        // let userId = response.user_id;
        // Ember.getOwner(this).lookup('router:main').transitionTo('user',userId);
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
