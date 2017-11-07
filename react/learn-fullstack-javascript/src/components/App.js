import React from 'react';

import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
  static propTypes = {
    initialContests: React.PropTypes.array,
  };

  state = {
    contests: this.props.initialContests,
  };

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Header message="Naming Contests!!" />
        <div>
          {this.state.contests.map(contest => {
            return <ContestPreview key={contest.id} {...contest} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
