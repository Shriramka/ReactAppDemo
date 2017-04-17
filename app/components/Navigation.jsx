var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React  App
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link">MyAccount</IndexLink>
          </li>
          <li>
            <Link to="/cards" activeClassName="active-link">Cards</Link>
          </li>

          <li>
            <Link to="/travel" activeClassName="active-link">Travel</Link>
          </li>

          <li>
            <Link to="/rewards" activeClassName="active-link">Reward</Link>
          </li>

          <li>
            <Link to="/business" activeClassName="active-link">Business</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Developed by <a href="http://www.infosys.com" target="_blank">Infosys</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Navigation;
