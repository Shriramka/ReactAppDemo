var React = require('react');
var expect = require('expect');

var Cards = require('Cards');

describe('Cards Component', () => {
  it('Cards Component should exist', () => {
    expect(Cards).toExist();
  });

  describe(' Cards Component Functionalities', () => {
     it('Test 1', () => {
      expect(1).toBe(1);
     });

     it('Test 2', () => {
      expect(1).toBe(1);
     });
  });
});
