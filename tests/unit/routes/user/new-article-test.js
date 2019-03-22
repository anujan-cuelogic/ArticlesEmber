import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | user/new_article', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:user/new-article');
    assert.ok(route);
  });
});
