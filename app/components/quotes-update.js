import Component from '@ember/component';

export default Component.extend({
  store: Ember.inject.service(),
  router: Ember.inject.service(),
  actions: {
    postArticle: function() {
      var txt = this.get('articleText');
      if (txt) {
        this.get('store').findRecord('user', this.get('userId')).then((user) => {
          var ArticleData = {body: txt, user: user};
          var newArticle = this.get('store').createRecord('article', ArticleData)
          this.set('articlesCount', this.get('articlesCount') + 1)
          return newArticle.save();
        });
        this.set('articleText', '')
        this.set('errorMsg', '')
        this.set('alertClass', 'alert-success')
        this.set('alert', 'Article created successfully')
      } else {
        this.set('errorMsg', 'Cannot submit blank article')
      }
    },

    updateArticle: function() {
      var txt = this.get('articleText');
      if (txt) {
        this.get('store').findRecord('article', this.get('articleId')).then((article) => {
          article.set('body', txt);
          return article.save();
        });
        this.get('router').transitionTo('user', this.get('userId'));
        this.set('alertClass', 'Article updated successfully')
        this.set('alert', 'Article updated successfully')
        this.set('articleText', '')
      } else {
        this.set('errorMsg', 'Cannot submit blank article')
      } 
    },

  }

});
