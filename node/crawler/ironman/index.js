const request = require('request');
const async = require('async');
const cheerio = require('cheerio');

const ironmen = ['https://ithelp.ithome.com.tw/users/20103325/ironman/1299'];

async.map(ironmen, getInfo, (err, results) => {
  console.log(results);
});

function getInfo(url, callback) {
  request(url, (err, res, body) => {
    const $ = cheerio.load(body);
    const link = url;
    const name = $('.profile-header__name')
      .text()
      .trim();

    const title = $('.qa-list__title--ironman')
      .text()
      .trim()
      .replace(' 系列', '');

    const joinDays = $('.qa-list__info--ironman span')
      .eq(0)
      .text()
      .replace(/[^0-9]/g, '');

    const posts = $('.qa-list__info--ironman span')
      .eq(1)
      .text()
      .replace(/[^0-9]/g, '');

    const subscriber = $('.qa-list__info--ironman span')
      .eq(2)
      .text()
      .replace(/[^0-9]/g, '');

    const postList = $('.qa-list')
      .map((index, item) => {
        return {
          title: $(item)
            .find('.qa-list__title')
            .text()
            .trim(),
          like: $(item)
            .find('.qa-condition__count')
            .eq(0)
            .text()
            .trim(),
          comment: $(item)
            .find('.qa-condition__count')
            .eq(1)
            .text()
            .trim(),
          view: $(item)
            .find('.qa-condition__count')
            .eq(2)
            .text()
            .trim(),
          date: $(item)
            .find('.qa-list__info-time')
            .text()
            .trim(),
          url: $(item)
            .find('.qa-list__title a')
            .attr('href')
            .trim(),
        };
      })
      .get();

    callback(null, {
      name,
      title,
      link,
      joinDays,
      posts,
      subscriber,
      postList,
    });
  });
}
