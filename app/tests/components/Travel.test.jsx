var React = require('react');
var expect = require('expect');

var Travel = require('Travel');

describe('Travel Component', () => {
  it(' Travel Component should exist', () => {
    expect(Travel).toExist();
  });

  describe('Travel Component Functionalities', () => {
     it('Test 1', () => {
      expect(1).toBe(1);
     });

     it('Test 2', () => {
      expect(1).toBe(1);
     });
  });
});
