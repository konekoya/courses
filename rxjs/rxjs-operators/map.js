const { interval } = require("rxjs");
const { map, take, filter } = require("rxjs/operators");

// interval(100)
//   .pipe(
//     map(x => x * 2),
//     take(10)
//   )
//   .subscribe(v => console.log(v));

interval(100)
  .pipe(
    filter(x => x % 2 === 0),
    filter(Boolean),
    take(10),
    map(x => x * 10)
  )
  .subscribe(v => console.log(v));
