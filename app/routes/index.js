import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {articles: this.get('store').findAll('article')}
  }
});
