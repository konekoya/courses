import React from 'react';

import Header from './Header';
import ContestList from './contestList';
import Contest from './Contest';

const pushState = (obj, url) => {
  window.history.pushState(obj, '', url);
};

class App extends React.Component {
  static propTypes = {
    initialContests: React.PropTypes.array,
  };

  state = {
    contests: this.props.initialContests,
    pageHeader: 'Naming contest',
  };

  fetchContent = contestId => {
    pushState({ currentContestId: contestId }, `/contest/${contestId}`);
    this.setState({
      pageHeader: this.state.contests[contestId].contestName,
      currentContestId: contestId,
    });
  };

  currentContent = () => {
    if (this.state.currentContestId) {
      return <Contest {...this.state.contests[this.state.currentContestId]} />;
    }
    return (
      <ContestList
        onContestClick={this.fetchContent}
        contests={this.state.contests}
      />
    );
  };

  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        {this.currentContent()}
      </div>
    );
  }
}

export default App;
