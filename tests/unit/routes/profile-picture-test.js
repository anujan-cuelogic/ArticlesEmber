import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | profile-picture', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:profile-picture');
    assert.ok(route);
  });
});
