'use strict';

import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as votingActions from '../../actions/voteActions';
import VotingResultsComponent from './votingResultsComponent';

class VotingResultsContainer extends Component {
  constructor(props) {
    super(props);
  }

  static fetchData = [votingActions.getVotingResults];

  componentDidMount() {
    const { votingResults, votingActions } = this.props;
    if (!votingResults || !votingResults.length) {
      votingActions.getVotingResults();
    }
  }

  render() {
    const { votingResults } = this.props;
    return (
      <div className="voting-result-chart">
        <VotingResultsComponent votingResults={votingResults} />
      </div>
    );
  }
}

VotingResultsContainer.propTypes = {
  votingResults: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  const { votingResultsState } = state;
  return {
    votingResults: votingResultsState.votingResults,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    votingActions: bindActionCreators(votingActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VotingResultsContainer);
