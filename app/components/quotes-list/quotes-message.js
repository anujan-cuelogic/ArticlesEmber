import Component from '@ember/component';

export default Component.extend({
  store: Ember.inject.service(),
  actions: {
    destroyArticle(articleId) {
      this.get('store').findRecord('article', articleId, {backgroundReload: false}).then(function(article) {
        article.destroyRecord();
      });
    }
  }

});
