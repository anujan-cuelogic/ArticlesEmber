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
    var user = await this.get('store').find('user', params.user_id);
    var canAddArticle = (this.get('currentUser.userId') == user.id)
    return {
      user: user,
      canAddArticle: canAddArticle,
    }
  },

  afterModel(model) {
    if (!model.user.get('id')) {
      this.transitionTo('index');
    }
  }

});
