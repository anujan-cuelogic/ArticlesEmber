import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend({

  model () {
    return {articles: this.get('store').findAll('article')}
  }
});
