import Route from '@ember/routing/route';

export default Route.extend({

	model(params) {
      return {article: this.get('store').find('article', params.article_id)}
	}

});
