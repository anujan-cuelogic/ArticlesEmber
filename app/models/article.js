import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo(),
  createdDate: DS.attr('number'),
  body: DS.attr('string')
});
