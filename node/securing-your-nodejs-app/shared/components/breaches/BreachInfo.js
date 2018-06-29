'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

export default class BreachInfo extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <h1>This is breach info</h1>
        <p>
          <Link to="timeline/11">Go home...</Link>
        </p>
      </div>
    );
  }
}
