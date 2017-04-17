var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

var MyAccount = require('MyAccount');
var Cards = require('Cards');
var Travel = require('Travel');
var Rewards = require('Rewards');
var Business = require('Business');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="cards" component={Cards}/>
      <Route path="travel" component={Travel}/>      
      <Route path="rewards" component={Rewards}/>
      <Route path="business" component={Business}/>
      <IndexRoute component={MyAccount}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
