import Controller from '@ember/controller';
import { inject } from '@ember/service'
import { enc } from "crypto-js";

export default Controller.extend({

  session: Ember.inject.service(),
  router: Ember.inject.service(),

  actions: {
    authenticate: function() {
      let password = enc.Utf8.parse(this.password);
      let encryptedPassword = enc.Base64.stringify(password);
      // var credentials = this.getProperties('identification', 'password');
      let credentials = {identification: this.identification, password: encryptedPassword};
      let  authenticator = 'authenticator:jwt';
      this.get('session').authenticate(authenticator, credentials).catch((reason)=> {
        // this.transitionTo('login');
        if (reason.status == 401) {
          this.set('errorMessage', 'Invalid username or password');
        } else {
          this.set('errorMessage', 'Looks like our server is in trouble!! Try again in few minutes');
        }
      });
    }
  }

});
