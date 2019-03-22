import Route from '@ember/routing/route';

export default Route.extend({

	model() {
      return {article: this.get('store').find('article', 1)}
	}

});
