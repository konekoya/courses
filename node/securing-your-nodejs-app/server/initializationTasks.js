'use strict';
import {
  getTimelineItemModel,
  getUserModel,
  getEventVoteModel,
} from './data_access/modelFactory';
import timelineItems from './data/timelineItems-seed';
import Promise from 'bluebird';

const fs = Promise.promisifyAll(require('fs'));

export const initialize = async () => {
  try {
    await seedTimelineEvents();
    return await seedUsersAndVotes();
  } catch (err) {
    throw err;
  }
};

const seedTimelineEvents = async () => {
  const TimelineItem = await getTimelineItemModel();
  const timelineItemsExists = await TimelineItem.count({});

  try {
    if (!timelineItemsExists) {
      let timelineItemModels = timelineItems.map(function(i) {
        i.details = i.details.split('\n\n');
        return new TimelineItem(i);
      });

      await TimelineItem.insertMany(timelineItemModels);
    }
  } catch (err) {
    throw err;
  }
};

const seedUsersAndVotes = async () => {
  const User = await getUserModel();
  const EventVote = await getEventVoteModel();
  const TimelineItem = await getTimelineItemModel();
  const usersExists = await User.count({});
  const usersData = JSON.parse(
    await fs.readFileAsync('server/data/users.json', 'utf-8'),
  );

  try {
    if (usersExists) return;

    let users = usersData.map(function(u) {
      return new User(u);
    });

    const min = 1;
    const max = await TimelineItem.count({});
    const userDocs = await Promise.all(
      users.map(function(user) {
        return user.save();
      }),
    );

    userDocs.map(async user => {
      const shouldVote = Math.round(Math.random());

      if (shouldVote) {
        const eventId = getRandomInt(min, max);
        const eventVote = new EventVote({
          eventId,
          voter: user._id,
          voteType: 'popular',
        });

        await eventVote.save(eventVote);
      }
    });
  } catch (err) {
    throw err;
  }
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
