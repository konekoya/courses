import React from 'react';
import Graph from './Graph';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [],
      nodes: [],
    };
  }

  componentDidMount() {
    this.updateData();
  }

  updateData() {
    // randomData is loaded in from external file generate_data.js
    // and returns an object with nodes and links
    var newState = randomData(this.state.nodes, width, height);
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <div className="update" onClick={this.updateData}>
          update
        </div>
        <Graph nodes={this.state.nodes} links={this.state.links} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
