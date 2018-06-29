'use strict';

import React, { Component, PropTypes } from 'react';
import AssociatedEventDetails from './timelineAssociatedEventsDetailsComponent';

class TimelineEventDetails extends Component {
  constructor(props) {
    super(props);

    this.userHasCastedVoteType = this.userHasCastedVoteType.bind(this);
  }

  userHasCastedVoteType(voteType) {
    const { userEventVotes } = this.props;
    return (
      userEventVotes && userEventVotes.some(elem => elem.voteType == voteType)
    );
  }

  render() {
    const { voteForEvent } = this.props;
    const { event, associatedEvents } = this.props.timelineEvent;
    const category = `//${event.group
      .charAt(0)
      .toUpperCase()}${event.group.substr(1)}`;
    return (
      <div className="timeline-event-container">
        <div className="timeline-event_details">
          <div className="timeline-event_banner">
            <div className="timeline-event_details-title">
              <h2>
                {category}
                <span> {event.name}</span>
              </h2>
            </div>
            {!this.userHasCastedVoteType('popular') && (
              <div className="timeline-event_vote">
                <button
                  className="button button-default button-dark"
                  onClick={voteForEvent.bind(this, event)}
                >
                  VOTE
                </button>
              </div>
            )}
          </div>
          <div className="timeline-event_details-text">
            {event.details.map((d, i) => <p key={i}>{d}</p>)}
          </div>
          {event.sources &&
            event.sources.length > 0 && (
              <div className="timeline-event_sources">
                <ul>
                  <div>
                    <span>sources:&nbsp;</span>
                  </div>

                  {event.sources.map((source, i) => {
                    return (
                      <div key={i}>
                        <li>
                          <a href={source.link}>{source.name}</a>
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            )}
        </div>
        {associatedEvents &&
          associatedEvents.length > 0 && (
            <AssociatedEventDetails associatedEvents={associatedEvents} />
          )}
      </div>
    );
  }
}

TimelineEventDetails.propTypes = {
  timelineEvent: PropTypes.object.isRequired,
  submitVote: PropTypes.func,
};

export default TimelineEventDetails;
