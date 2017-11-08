import React from 'react';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContestClick }) => {
  return (
    <div>
      {Object.keys(contests).map(contestId => {
        return (
          <ContestPreview
            key={contestId}
            onClick={onContestClick}
            {...contests[contestId]}
          />
        );
      })}
    </div>
  );
};

ContestList.propTypes = {
  contests: React.PropTypes.object,
  onContestClick: React.PropTypes.func.isRequired,
};

export default ContestList;
