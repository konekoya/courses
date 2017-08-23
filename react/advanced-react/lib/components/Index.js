import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    anwser: 42,
  };

  asyncFunc = () => {
    return Promise.resolve(27);
  };
  async componentDidMount() {
    this.setState({
      anwser: await this.asyncFunc(),
    });
  }

  render() {
    return (
      <h2>
        Hello React -- {this.state.anwser}{' '}
      </h2>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
