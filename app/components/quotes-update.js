import Component from '@ember/component';

export default Component.extend({
  store: Ember.inject.service(),
  actions: {
    postArticle: function() {
      console.log('postArticle ppppppppppppp')
      var txt = this.get('articleText');
      this.get('store').findRecord('user', 1).then((user) => {
        var ArticleData = {body: txt, user: user};
        var newQuote = this.get('store').createRecord('article', ArticleData)
        return newQuote.save();
      });
    }
  }

});
