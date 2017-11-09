import React from 'react';

class Contest extends React.Component {
  static propTypes = {
    description: React.PropTypes.string.isRequired,
  };
  render() {
    return <div className="Contest">{this.props.description}</div>;
  }
}
export default Contest;
