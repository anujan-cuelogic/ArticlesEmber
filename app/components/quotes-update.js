import Component from '@ember/component';

export default Component.extend({
  store: Ember.inject.service(),
  actions: {

    postArticle: function() {
      console.log('postArticle ppppppppppppp', this.get('userId'))
      var txt = this.get('articleText');
      this.get('store').findRecord('user', this.get('userId')).then((user) => {
        var ArticleData = {body: txt, user: user};
        var newArticle = this.get('store').createRecord('article', ArticleData)
        return newArticle.save();
      });
      this.set('articleText', '')
    },


    updateArticle: function() {
      console.log('updateArticle', 'eeeeeeeeeeee')
      console.log('updateArticle', 'eeeeeeeeeeee', this.get('articleId'))
      var txt = this.get('articleText');
      this.get('store').findRecord('article', this.get('articleId')).then((article) => {
        article.set('body', txt);
        console.log('-----updateArticle', article.get('hasDirtyAttributes'), article.get('changedAttributes()'))
        return article.save();
      });
    },

  }

});
