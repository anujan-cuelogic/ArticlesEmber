import { A } from '@ember/array';
import Controller from '@ember/controller';
import { inject } from '@ember/service'
import { enc } from "crypto-js";

export default Controller.extend({
  session: Ember.inject.service(),
  router: Ember.inject.service(),
  init() {
    this._super(...arguments);
    this.set('errors', A([]));
  },
  required(identification, password) {
    this.set('errors', A([]));
    if (!identification && !password) {
      return this.errors.pushObject({ message: `Username and Password is required`});
    } else if (!identification && password) {
      return this.errors.pushObject({ message: `Username is required`});
    } else if (identification && !password) {
      return this.errors.pushObject({ message: `Password is required`});
    }
  },
  actions: {
    authenticate() {
      let password = enc.Utf8.parse(this.password);
      let encryptedPassword = enc.Base64.stringify(password);
      this.required(this.identification, this.password);
      // var credentials = this.getProperties('identification', 'password');
      if (this.errors.length) {return false;}
      let credentials = {identification: this.identification, password: encryptedPassword};
      let  authenticator = 'authenticator:jwt';
      this.get('session').authenticate(authenticator, credentials).catch((reason)=> {
        // this.transitionTo('login');
        if (reason.status == 401) {
          this.errors.pushObject({ message: 'Invalid username or password'});
        } else {
          this.errors.pushObject({ message: 'Looks like our server is in trouble!! Try again in few minutes'});
        }
      });
    },
  }
});
