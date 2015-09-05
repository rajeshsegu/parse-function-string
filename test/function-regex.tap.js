'use strict';

var scotchTape = require('scotch-tape');
var functionRegex = require('../lib/function-regex');

var test = scotchTape({
  before: function beforeEach() {
    this.regexFn = functionRegex();
    this.end();
  },
  after: function afterEach() {
    this.regexFn = null;
    this.end();
  }
});

test('functionRegex', function run(it) {
  it('should be exported correctly', function should(t) {
    t.equal(typeof functionRegex, 'function');
    t.end();
  });

  it('should return a regex', function should(t) {
    t.ok(this.regexFn instanceof RegExp);
    t.end();
  });
});
