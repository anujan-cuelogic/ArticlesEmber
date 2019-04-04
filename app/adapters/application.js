import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  host: "http://localhost:3000",
  // session: Ember.inject.service(),
  authorizer: 'authorizer:custom',
  // authorizer: 'authorizer:application',
  // headers: Ember.computed('session.token', function() {
  //   return {Authorization: this.get('session.data.authenticated.token')}
  // })
});
