'use strict';

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import * as timelineActions from '../../actions/timelineActions';
import * as voteActions from '../../actions/voteActions';
import Timeline from './timelineComponent';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import TimelineEventDetails from './timelineEventDetailsComponent';
import $ from 'jquery';
import _ from 'underscore';
import TimelineInteractionsComponent from './timelineInteractionsComponent';
import TimelineEventWelcome from './timelineEventWelcomeComponent';
import { getMinimumDate, getMaximumDate } from '../../lib/utility';

class TimelineContainer extends React.Component {
  constructor(props) {
    super(props);

    this.routeClickHandler = this.routeClickHandler.bind(this);
    this.voteForEvent = this.voteForEvent.bind(this);
    this.setStartDateState = this.setStartDateState.bind(this);
    this.setEndDateState = this.setEndDateState.bind(this);
    this.onStackOrientationChange = this.onStackOrientationChange.bind(this);
    this.transformTimelineEvents = this.transformTimelineEvents.bind(this);
    this.getTimelineDateRange = this.getTimelineDateRange.bind(this);
  }

  // ====================
  //   react hooks
  // ====================

  componentDidMount() {
    const { timelineItems, timelineActions } = this.props;
    if (!timelineItems || !timelineItems.length) {
      timelineActions.getTimelineItems();
    }
    this.routeClickHandler();
  }

  static fetchData = [timelineActions.getTimelineItems];

  // ========================
  //   react state handling
  // ========================

  setStartDateState(date) {
    let { filterCriteria, timelineActions } = this.props;
    filterCriteria.startDate = date.toString();
    timelineActions.filterTimelineItemsByDates(
      filterCriteria.startDate,
      filterCriteria.endDate,
    );
    return this.setState({ filterCriteria });
  }

  setEndDateState(date) {
    let { filterCriteria, timelineActions } = this.props;
    filterCriteria.endDate = date.toString();
    timelineActions.filterTimelineItemsByDates(
      filterCriteria.startDate,
      filterCriteria.endDate,
    );
    return this.setState({ filterCriteria });
  }

  onStackOrientationChange() {
    const { filterCriteria, timelineActions } = this.props;
    filterCriteria.stackOrientation = !filterCriteria.stackOrientation;
    timelineActions.updateFilterCriteria(filterCriteria);
    return this.setState({ filterCriteria });
  }

  voteForEvent(event) {
    const { user, votingActions } = this.props;
    const { pathname } = this.props.location;
    if (_.isEmpty(user)) {
      browserHistory.push(`login?returnUrl=${pathname}`);
    } else {
      votingActions.voteForEvent(event, user);
    }
  }

  routeClickHandler() {
    $('#timeline').on('click', 'a', function(event) {
      event.preventDefault();
      browserHistory.push(this.pathname);
    });
  }

  // ========================
  //   timeline functions
  // ========================

  getTimelineEvent(id, events) {
    let eventDetails = { event: {}, associatedEvents: [] };
    const event = events.find(item => item._id == id);

    if (!event) {
      return eventDetails;
    }

    const associatedEvents = event.timelineEvents.map(ae => {
      return events.find(event => event._id == ae);
    });

    return Object.assign({}, eventDetails, {
      event,
      associatedEvents: associatedEvents || [],
    });
  }

  transformTimelineEvents(items) {
    return items.map(item => {
      const primaryDetails =
        item.group == 'breach'
          ? `# Records: ${item.records
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
          : `AF: ${item.affiliations ? item.affiliations : 'unknown'}`;

      const secondaryDetails =
        item.group == 'breach'
          ? `Type: ${item.breachType}`
          : `Targets: ${item.targets}`;

      item.className = 'timeline-event';
      item.title = `${item.details[0].substring(0, 35)}...`;
      item.content = `
                        <a class="timeline-event_link" href="timeline/${
                          item._id
                        }">
                                <div class="timeline-event_link-heading">
                                    <h5>${item.name}</h5>
                                </div>
                                <div class="timeline-event_link-info">
                                    <div class="timeline-event_link-info-detail">

                                        <span>${primaryDetails}</span>
                                    </div>
                                    <div class="timeline-event_link-info-detail"><span>${secondaryDetails}</span></div>
                                </div>
                        </a>
                        `;

      return item;
    });
  }

  getTimelineDateRange(timelineEvent = {}, filterCriteria) {
    const minDate = new Date(filterCriteria.startDate);
    const maxDate = new Date(filterCriteria.endDate);

    const startDate =
      timelineEvent.event && timelineEvent.event.start
        ? new Date(timelineEvent.event.start).subtractDays(180)
        : new Date(filterCriteria.startDate);

    const endDate =
      timelineEvent.event && timelineEvent.event.end
        ? new Date(timelineEvent.event.end).addDays(180)
        : new Date(filterCriteria.endDate);

    return {
      min: minDate,
      max: maxDate,
      start: startDate,
      end: endDate,
    };
  }

  render() {
    const { user, votes, filterCriteria, timelineItems = [] } = this.props;
    const { event = undefined } = this.props.params;
    const historyPoint = this.getTimelineEvent(event, timelineItems);
    const userEventVotes = votes.length
      ? votes.filter(vote => vote.voter == user.username)
      : [];
    const augmentedTimelineItems = this.transformTimelineEvents(timelineItems);

    const timelineDates = this.getTimelineDateRange(
      historyPoint,
      filterCriteria,
    );

    const options = Object.assign({}, timelineDates, {
      stack: filterCriteria.stackOrientation,
    });

    return (
      <div className="timeline-container">
        <div className="timeline-events">
          {!event && <TimelineEventWelcome />}
          {event && (
            <TimelineEventDetails
              timelineEvent={historyPoint}
              voteForEvent={this.voteForEvent}
              userEventVotes={userEventVotes}
            />
          )}
        </div>
        <div className="timeline">
          <div className="timeline-info-bar">
            <TimelineInteractionsComponent
              filterCriteria={filterCriteria}
              onStartDateChange={this.setStartDateState}
              onEndDateChange={this.setEndDateState}
              onStackOrientationChange={this.onStackOrientationChange}
            />
          </div>
          <Timeline
            timelineItems={augmentedTimelineItems}
            timelineEvent={historyPoint}
            timelineOptions={options}
            activeItemId={historyPoint.event._id}
          />
        </div>
      </div>
    );
  }
}

Timeline.propTypes = {
  timelineItems: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  const { timelineState, userDataState } = state;
  const { timelineItems, filterCriteria } = timelineState;

  if (
    !filterCriteria.startDate &&
    !filterCriteria.endDate &&
    timelineItems.length
  ) {
    const startDates = timelineItems.map(i => new Date(i.start));
    const endDates = timelineItems.map(i => new Date(i.end));
    filterCriteria.startDate = getMinimumDate(startDates);
    filterCriteria.endDate = getMaximumDate(endDates);
  }

  return {
    timelineItems: timelineState.timelineItems,
    user: userDataState.user,
    votes: userDataState.votes,
    filterCriteria,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    votingActions: bindActionCreators(voteActions, dispatch),
    timelineActions: bindActionCreators(timelineActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimelineContainer);
