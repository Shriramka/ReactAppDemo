var React = require('react');
var expect = require('expect');

var Business = require('Business');

describe('Business Component', () => {
  it('Business Component should exist', () => {
    expect(Business).toExist();
  });

  describe('Business Component Functionalities', () => {
     it('Test 1', () => {
      expect(1).toBe(1);
     });

     it('Test 2', () => {
      expect(1).toBe(1);
     });
  });
});
