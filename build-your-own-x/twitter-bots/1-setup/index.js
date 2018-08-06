const twit = require('twit');

require('dotenv').config();

const bot = new twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
});

// post a tweet
// bot.post('statuses/update', { status: 'Hello world' }, (err, data, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`${data.text} was tweeted.`);
//   }
// });

// get follower list
// bot.get('/followers/list', { screen_name: 'konekoya' }, (err, data, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     data.users.forEach(user => {
//       console.log(user.screen_name);
//     });
//   }
// });

// get following list
// bot.get('/friends/list', { screen_name: 'konekoya' }, (err, data, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

function getBotTimeline() {
  bot.get('/statuses/home_timeline', { count: 5 }, (err, data, res) => {
    if (err) {
      console.log(err);
    } else {
      data.forEach(d => {
        console.log(d.text);
        console.log(d.user.screen_name);
        console.log(d.id_str);
        console.log('\n');
      });
    }
  });
}

getBotTimeline();
