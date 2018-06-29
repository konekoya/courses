'use strict';

import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const TimelineInteractionsComponent = ({
  filterCriteria,
  onStartDateChange,
  onEndDateChange,
  onStackOrientationChange,
}) => {
  return (
    <div className="timeline-info-bar_filter-criteria">
      <div className="filter-criteria">
        <label htmlFor="stackedOrientation">Stack Events?</label>
        <input
          type="checkbox"
          name="stackedOrientation"
          checked={filterCriteria.stackOrientation}
          onChange={onStackOrientationChange}
        />
      </div>
      <div className="filter-criteria">
        <label htmlFor="startDate">From</label>
        <DatePicker
          selected={moment(filterCriteria.startDate)}
          onChange={onStartDateChange}
          name="startDate"
        />
      </div>
      <div className="filter-criteria">
        <label htmlFor="endDate">To</label>
        <DatePicker
          selected={moment(filterCriteria.endDate)}
          onChange={onEndDateChange}
          name="endDate"
        />
      </div>
    </div>
  );
};

export default TimelineInteractionsComponent;
