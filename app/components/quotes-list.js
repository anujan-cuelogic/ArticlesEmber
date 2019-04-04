import Component from '@ember/component';

export default Component.extend({
  articleSorting: ['createdDate:desc'],
  sortedArticles: Ember.computed.sort('articles', 'articleSorting')
});
