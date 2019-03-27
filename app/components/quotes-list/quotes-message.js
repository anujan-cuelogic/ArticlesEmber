import Component from '@ember/component';

export default Component.extend({
  store: Ember.inject.service(),
  formatedDate: Ember.computed(function() {
    date = this.get('article').createdDate;
    return this.date.getDate() + this.date.getMonth() + this.date.getYear()
  }),
  actions: {
    destroyArticle(articleId) {
      this.get('store').findRecord('article', articleId, {backgroundReload: false}).then(function(article) {
        article.destroyRecord();
        $('.alert').addClass('alert-success')
        $('.alert').html('Article deleted successfully')
        $('.error').html('')
      });
    }
  }

});
