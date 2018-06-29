'use strict';

// ====================
//   /api/timeline
// ====================

/* eslint-disable no-console */

import React from 'react';
import { Router } from 'express';
import { getTimelineItemModel } from '../data_access/modelFactory';
import colors from 'colors';

const timelineRouter = Router();

timelineRouter.route('/api/timeline(/:id/)?').get(async function(req, res) {
  try {
    const { startDate, endDate } = req.query;
    const query = {};
    if (startDate && endDate) {
      query['start'] = { $gte: startDate };
      query['end'] = { $lte: endDate };
    }

    const TimelineItem = await getTimelineItemModel();
    const timelineItems = await TimelineItem.find(query).exec();

    res.json({ timelineItems: timelineItems });
  } catch (error) {
    console.log(
      colors.red('There was an error retrieving timeline items: ' + error),
    );
    res
      .status(500)
      .send(
        'There was an error retrieving timeline items.  Please try again later',
      );
  }
});

timelineRouter.route('/api/timeline/range').get(async function(req, res) {
  try {
    const { startDate, endDate } = req.params;
    const TimelineItem = await getTimelineItemModel();
    const timelineItems = await TimelineItem.find({
      start: { $gte: startDate },
      end: { $lte: endDate },
    });

    console.log(
      colors.blue(`retrieved range of items: ${JSON.stringify(timelineItems)}`),
    );

    res.json({ timelineItems: timelineItems });
  } catch (err) {
    res
      .statusCode(500)
      .send(
        'There was an error retrieving the specific range of timeline items. Please try again later',
      );
  }
});

export default timelineRouter;
