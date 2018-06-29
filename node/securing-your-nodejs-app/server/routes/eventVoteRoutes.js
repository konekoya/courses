'use strict';

import { Router } from 'express';
import cors from 'cors';
import {
  getEventVoteModel,
  getUserModel,
  getTimelineItemModel,
} from '../data_access/modelFactory';
const eventVoteRouter = Router();

eventVoteRouter.route('/api/event/vote').get(cors(), async function(req, res) {
  try {
    const TimelineItem = await getTimelineItemModel();
    const EventVote = await getEventVoteModel();
    const popularVotes = await EventVote.aggregate([
      { $match: { voteType: 'popular' } },
      { $group: { _id: '$eventId', count: { $sum: 1 } } },
    ]).exec();

    await TimelineItem.populate(
      popularVotes,
      { path: '_id', select: 'name' },
      function(err, vts) {
        return vts;
      },
    );

    const data = popularVotes.map(vote => {
      const { count } = vote;
      if (!vote._id) return;

      const { _id, name } = vote._id;
      return {
        eventId: _id,
        name,
        count,
        voteType: 'popular',
      };
    });

    return res.json(data);
  } catch (err) {
    res
      .status(500)
      .send(
        'There was a problem getting the voting results.  Please try again later.',
      );
  }
});

eventVoteRouter.route('/api/event/vote').post(cors(), async function(req, res) {
  try {
    const EventVote = await getEventVoteModel();
    const User = await getUserModel();
    const { eventId } = req.body;
    const { userInfo = {} } = req.session;

    if (!eventId) {
      return res
        .status(500)
        .send(
          'Timeline event identification missing.  Please correct and resubmit.',
        );
    }

    const user = await User.findOne({ _id: userInfo._id }).exec();
    if (!user) {
      return res
        .status(401)
        .send(
          'There is no current user to associate with this vote. Please login and try again.',
        );
    }

    const eventVote = {
      eventId: eventId,
      voteType: 'popular',
      voter: user._id,
    };

    const existingVote = await EventVote.findOne(eventVote).exec();

    if (existingVote) {
      return res
        .status(409)
        .send('A vote for this event has already been cast by this voter.');
    }

    const newEventVote = new EventVote(eventVote);
    await newEventVote
      .save()
      .then(function(vote) {
        const data = {
          eventId: vote.eventId,
          voter: user.email,
          voteType: eventVote.voteType,
        };

        return res.status(200).json(data);
      })
      .catch(function(err) {
        return res
          .status(500)
          .send(
            'There was an issue casting a vote for this event. Please try again.',
          );
      });
  } catch (err) {
    return res
      .status(500)
      .send(
        'There was an issue casting a vote for this event. Please try again.',
      );
  }
});

export default eventVoteRouter;
