import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

  session: service(),
  currentUser: service('currentUser'),

  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      this.replaceWith('login');
    }
  },

  async model(params) {
    var user = await this.get('store').find('user', params.user_id).catch((reason)=> {
      // this.transitionTo('login');
      if (reason.errors.firstObject.status == 404) {
        this.set('errorMessage', 'You are unauthorized to access this page.');
        this.transitionTo('user',this.currentUser.userId);
      } else {
        this.set('errorMessage', 'Looks like our server is in trouble!! Try again in few minutes');
        this.transitionTo('/');
      }
    });
    return {
      user: user,
      canAddArticle: (this.get('currentUser.userId') == user.id)
    }
  },

  afterModel(model) {
    if (!model.user.get('id')) {
      this.transitionTo('index');
    }
  }

});
