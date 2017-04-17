var React = require('react');
var expect = require('expect');

var MyAccount = require('MyAccount');

describe('MyAccount Component', () => {
  it('My Account Component should exist', () => {
    expect(MyAccount).toExist();
  });

  describe('My Account Component Functionalities', () => {
     it('Test 1', () => {
      expect(1).toBe(1);
     });

     it('Test 2', () => {
      expect(1).toBe(1);
     });
  });
});
