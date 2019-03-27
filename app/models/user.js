import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  username: DS.attr('string'),
  password: DS.attr('string'),
  bio: DS.attr('string'),
  numberOfArticles: DS.attr('number'),
  numberOfFollowing: DS.attr('number'),
  numberOfFollowers: DS.attr('number'),
  articles: DS.hasMany('article', {async: true})
});
