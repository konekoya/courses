import React from 'react';

const Details = React.createClass({
  render() {
    return (
      <div className='details'>
        <code>
          <pre>
            { JSON.stringify(this.props, null, 2) }
          </pre>
        </code>
      </div>
    );
  }
});

export default Details;
