import React from 'react';
import storeProvider from './storeProvider';

class Timestamp extends React.PureComponent {
  timeDisplay = timestamp => {
    timestamp.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  shouldComponentUpdate(nextProps) {
    if (!this.props.timestamp) return true;
    return (
      this.timeDisplay(this.props.timestamp) !==
      this.timeDisplay(nextProps.timestamp)
    );
  }

  render() {
    return (
      <div>
        {this.props.timestamp
          ? this.props.timestamp.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })
          : null}
      </div>
    );
  }
}

function extraProps(store) {
  return {
    timestamp: store.getState().timestamp,
  };
}

export default storeProvider(extraProps)(Timestamp);
