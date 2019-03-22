import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
  	var user = this.get('store').find('user', params.user_id)
    return {
      user: user,
      articlesCount: user.numberOfArticles
    }
    // return this.store.findAll('user');
  }
});
