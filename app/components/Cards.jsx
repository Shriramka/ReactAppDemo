var React =require('react');

var Cards =React.createClass({

    render: function(){

        return(

             <div>
      <h1 className="text-center page-title">Cards</h1>
      <p>
        This is the application build on React. This is the <a>Cards </a> Component
      </p>
      <p>
        Lorem ipsum dolor sit amet, duis leo quam, feugiat auctor.
      </p>
      <ul>
        <li>
          <a href="www.infosys.com">Infosys</a> - This is infosys
        </li>
        <li>
          Vehicula non etiam porta fermentum volutpat. 
        </li>
      </ul>
    </div>
        )
    }
})

module.exports = Cards;