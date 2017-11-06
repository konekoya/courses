import React from 'react';

import Header from './Header';
import ContestPreview from './ContestPreview';
import data from '../testData';

class App extends React.Component {
  state = {
    contests: [],
  };

  componentWillMount() {
    this.setState({ contests: data.contests });
  }

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
