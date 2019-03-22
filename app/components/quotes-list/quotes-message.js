import Component from '@ember/component';

export default Component.extend({
  store: Ember.inject.service(),
  actions: {
    destroyArticle(articleId) {
      console.log('updateArticle', 'eeeeeeeeeeee')
      console.log('updateArticle', 'eeeeeeeeeeee', articleId)
      this.get('store').findRecord('article', articleId, {backgroundReload: false}).then(function(article) {
        article.destroyRecord();
      });
    }
  }

});
