var $ = require('jquery');
var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.less');

var api = 'https://tt-todo-api.herokuapp.com/api/todos/';

var TodoUiApp = React.createClass({
  getInitialState: function() {
    return {
      todos: []
    };
  },

  componentDidMount: function() {
    var success = function(result) {
      console.log(result);
      if (this.isMounted()) {
        this.setState({
          todos: result.todos
        });
      }
    };

    $.get(api, success.bind(this));
  },
  render: function() {
    return (
      <div className='main'>
        <span>Hej, världen!</span>
        <span>{this.state.todos}</span>
      </div>
    );
  }
});

module.exports = TodoUiApp;
