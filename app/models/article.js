import DS from 'ember-data';

import EmberObject, { computed } from '@ember/object';

export default DS.Model.extend({
  user: DS.belongsTo('user', {asyn: true}),
  createdDate: DS.attr('date', {default: new Date()} ),
  body: DS.attr('string')
});
