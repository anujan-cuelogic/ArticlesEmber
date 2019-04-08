import Service from '@ember/service';
const { RSVP: { Promise }, $: { ajax }, run } = Ember;

export default Service.extend({

	session: service('session'),

  store: service(),

  trigger(url, method, request) {
    const requestOptions = {
      url: (config.host + '/users/' + this.user.id + '/update_profile/'),
      type: 'PUT',
      data: JSON.stringify({bio: this.updatedBio}),
      contentType: 'application/json',
      headers: {Authorization: this.get('session.data.authenticated.token')},
      dataType: 'json'
    };
    if (userId) {
      this.set('userId', userId);
    } else {
      this.get('session').invalidate();
    }
  }

});
