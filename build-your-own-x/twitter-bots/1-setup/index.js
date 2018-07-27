const twit = require('twit');

require('dotenv').config();

const bot = new twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
});

bot.post('statuses/update', { status: 'Hello world' }, (err, data, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`${data.text} was tweeted.`);
  }
});
