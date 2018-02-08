const request = require('request');

const target = 'http://61.216.30.34:6504/forum/detail/bb6ccc08fbbe57bc6d6b1c3b20476973';

// 'https://ithelp.ithome.com.tw/articles/10190861

for(var i = 0; i < 200; i++) {
  request(target)
}