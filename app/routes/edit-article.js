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

  model(params) {
    return this.get('store').find('article', params.article_id)
      .then(article => { return article})
      .catch(error => {this.transitionTo('index')});
  },

  afterModel(model) {
    var userId = model.get('user').get('id')
    if (!(userId && userId == this.get('currentUser.userId'))) {
      this.transitionTo('index');
    }
  }

});
