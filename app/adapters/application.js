import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  // authorizer: 'authorizer:custom',
  host: "http://localhost:3000",
  session: Ember.inject.service(),
  headers: Ember.computed('session.token', function() {
    return {Authorization: this.get('session.data.authenticated.token')}
  })
  // ajax(url, method, hash) {
  //   if (true) {
  //     if (hash === undefined) { hash = {}; }
 
  //     hash.crossDomain = true;
 
  //     if (true) {
  //       hash.xhrFields = { withCredentials: true };
  //     }
  //   }
  // }
});

// import Ember from 'ember';
// import JSONAPIAdapter from 'ember-data/adapters/json-api';

// const { String: { pluralize, underscore } } = Ember;

// export default JSONAPIAdapter.extend({

//   pathForType(type) {
//     return pluralize(underscore(type));
//   }

// });