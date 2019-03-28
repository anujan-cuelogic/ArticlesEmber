import Controller from '@ember/controller';

export default Controller.extend({

  session: Ember.inject.service(),
  router: Ember.inject.service(),

  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password'),
        authenticator = 'authenticator:jwt';
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
