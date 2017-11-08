import React from 'react';

class Contest extends React.Component {
  static propTypes = {
    id: React.PropTypes.number.isRequired,
  };
  render() {
    return <div className="Contest">{this.props.id}</div>;
  }
}
export default Contest;
