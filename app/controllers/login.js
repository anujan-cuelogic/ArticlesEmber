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
        this.set('errorMessage', reason.error || reason);
      });
    }
  }

});
