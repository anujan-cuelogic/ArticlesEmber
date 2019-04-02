import Controller from '@ember/controller';

export default Controller.extend({
  articleCount: Ember.computed.alias('model.user.articles.length'),
  actions: {}
});
