'use strict';

var expect = require('chai').expect;
var math = require('../../math');

// suite
describe('Math', function() {
  describe('add()', function() {
    // test (spec)
    it('should add two numbers', function() {
      expect(math.add(2,2)).to.equal(4);
      expect(math.add(10, 90)).to.equal(100);
    });
  });
});
