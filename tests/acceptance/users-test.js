import { test } from 'qunit';
import moduleForAcceptance from 'lit-blog/tests/helpers/module-for-acceptance';
import { currentSession, authenticateSession, invalidateSession } from 'lit-blog/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | users');

test('visiting /users', function(assert) {
  visit('/users');

  andThen(function() {
    assert.equal(currentURL(), '/users');
  });
  
  test('should link to signup.', function (assert) {
    visit('/users');
    click('a:contains("Contact")');
    
    andThen(function () {
    assert.equal(currentURL(), '/contact', "should navigate to contact");
  });
  });

});
