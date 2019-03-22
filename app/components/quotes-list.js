import Component from '@ember/component';

export default Component.extend({
  articleSorting: ['id:desc'],
  sortedArticles: Ember.computed.sort('articles', 'articleSorting')
});
