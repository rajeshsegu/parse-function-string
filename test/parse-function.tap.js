'use strict';

var scotchTape = require('scotch-tape');
var parseFn = require('../lib/parse-function');

var test = scotchTape({
  asserts: {
    verify: function verify(fixture, expected) {
      var actual = parseFn(fixture);
      this.deepEqual(actual, expected);
    }
  }
});

test('parseFunctionString', function run(it) {

  it('should be exported correctly', function should(t) {
    t.equal(typeof parseFn, 'function');
    t.end();
  });

  it('should parse function string', function should(t) {
    var fixture = 'function sample(arg1, arg2, arg3) { return true; }';
    t.verify(fixture, {
      name: 'sample',
      params: 'arg1, arg2, arg3',
      args: ['arg1', 'arg2', 'arg3'],
      body: ' return true; ',
      called: false,
      defn: true
    });
    t.end();
  });

  it('should parse function', function should(t) {
    /* eslint brace-style: 0*/
    var fixture = function sample(arg1, arg2, arg3) { return true; };
    t.verify(fixture, {
      name: 'sample',
      params: 'arg1, arg2, arg3',
      args: ['arg1', 'arg2', 'arg3'],
      body: ' return true; ',
      called: false,
      defn: true
    });
    t.end();
  });

  it('should parse anonymous function', function should(t) {
    /* eslint func-names:0*/
    var fixture = function(arg1, arg2, arg3) { return true; };
    t.verify(fixture, {
      name: 'anonymous',
      params: 'arg1, arg2, arg3',
      args: ['arg1', 'arg2', 'arg3'],
      body: ' return true; ',
      called: false,
      defn: true
    });
    t.end();
  });

  it('should parse function with no args', function should(t) {
    /* eslint brace-style: 0*/
    var fixture = function empty() { return true; };
    t.verify(fixture, {
      name: 'empty',
      params: '',
      args: [],
      body: ' return true; ',
      called: false,
      defn: true
    });
    t.end();
  });

  it('should parse function call string', function should(t) {
    var fixture = 'empty(arg1, arg2, arg3)';
    t.verify(fixture, {
      name: 'empty',
      params: 'arg1, arg2, arg3',
      args: ['arg1', 'arg2', 'arg3'],
      body: '',
      called: true,
      defn: false
    });
    t.end();
  });

  it('should parse function call string with no args', function should(t) {
    var fixture = 'empty()';
    t.verify(fixture, {
      name: 'empty',
      params: '',
      args: [],
      body: '',
      called: true,
      defn: false
    });
    t.end();
  });
});

{
  name: 'sample', params: 'arg1, arg2, arg3',
  args: ['arg1', 'arg2', 'arg3'],
  body: ' return true; ',
  called: false,
  defn: true
}
