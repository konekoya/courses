'use strict';

import React, { PropTypes, Component } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

class ReactResultsComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { votingResults } = this.props;
    return (
      <ResponsiveContainer minHeight={95}>
        <BarChart
          data={votingResults}
          margin={{ top: 20, right: 30, left: 210, bottom: 5 }}
          layout="vertical"
        >
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#CB0C6C" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

ReactResultsComponent.propTypes = {
  votingResults: PropTypes.array.isRequired,
};

export default ReactResultsComponent;
