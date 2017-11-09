import express from 'express';
import data from '../src/testData';

const router = express.Router();
const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});

router.get('/contests', (req, res) => {
  res.send({
    contests: contests,
  });
});

router.get('/contests/:contestId', (req, res) => {
  let contest = contests[req.params.contestId];
  contest.description =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nihil nulla nam cumque inventore delectus facilis quod consectetur molestiae fuga, ea, et impedit. Officia neque dolore dignissimos quaerat dicta iure!';
  res.send(contest);
});

export default router;
