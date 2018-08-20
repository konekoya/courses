const fs = require('fs');

// console.log(lines);

const readFileAsArray = function(file, cb) {
  fs.readFile(file, function(err, data) {
    if (err) {
      return cb(err);
    }

    console.log(data);

    const lines = data
      .toString()
      .trim()
      .split('\n');

    cb(null, lines);
  });
};

// example call
readFileAsArray('./numbers', (err, lines) => {
  console.log(lines);
  // const numbers = lines.map(Number);
  // const addNumbers = numbers.filter(number => number % 2 === 1);
  // console.log('Odd numbers count', addNumbers.length);
});
