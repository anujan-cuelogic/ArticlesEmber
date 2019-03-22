import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      user: this.store.find('user', 2),
      articles: this.get('store').findAll('article')
      // articles: [{body: 45}]
    }
  }
});
