const { of, timer } = require("rxjs");
const { skipLast } = require("rxjs/operators");

// of(1, 2, 3, 4, 5)
//   .pipe(skipLast(3))
//   .subscribe(v => console.log(v));

timer(0, 100)
  .pipe(skipLast(5))
  .subscribe(v => console.log(v));
