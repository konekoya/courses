/* global React ReactDOM */
import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './ClientApp';

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div>
        <MyTitle title='props are the best' color='peru' />
        {/* <MyTitle title='semicolons are the worst' color='mediumaquamarine' />
        <MyTitle title='jklol its okay if you like semicolons' color='rebeccapurple' />
        <MyTitle title='CSS color is cool' color='royalblue' /> */}
      </div>
    )
  }
})

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
