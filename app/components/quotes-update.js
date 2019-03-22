import Component from '@ember/component';

export default Component.extend({
  store: Ember.inject.service(),
  actions: {
    postArticle: function() {
      var txt = this.get('articleText');
      console.log()
      if (txt) {
        this.get('store').findRecord('user', this.get('userId')).then((user) => {
          var ArticleData = {body: txt, user: user};
          var newArticle = this.get('store').createRecord('article', ArticleData)
          return newArticle.save();
          this.set('articlesCount', this.get('articlesCount') + 1)
        });
        this.set('articleText', '')
        this.set('successMsg', 'Article created successfully')
      } else {
        this.set('errorMsg', 'Cannot submit blank article')
      }
    },

    updateArticle: function() {
      var txt = this.get('articleText');
      if (txt) {
        this.get('store').findRecord('article', this.get('articleId')).then((article) => {
          article.set('body', txt);
          // console.log('-----updateArticle', article.hasDirtyAttributes(), article.changedAttributes())
          return article.save();
          this.set('articleText', '')
          this.set('successMsg', 'Article updated successfully')
          this.transitionTo('user', user.id);
        });
      } else {
        this.set('errorMsg', 'Cannot submit blank article')
      } 
    },

  }

});
