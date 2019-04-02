import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

  store: service(),
  currentUser: service('currentUser'),

  formatedDate: Ember.computed(function() {
    date = this.get('article').createdDate;
    return this.date.getDate() + this.date.getMonth() + this.date.getYear()
  }),

  canModify: Ember.computed(function() {
    console.log('computed', this.get('editable'), this.get('user.id'), this.get('currentUser.userId'));
    if (this.get('editable')) {
      return this.get('currentUser.userId') == this.get('user.id')
    }
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
