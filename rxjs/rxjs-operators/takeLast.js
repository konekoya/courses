const { of, interval } = require("rxjs");
const { takeLast } = require("rxjs/operators");

// of(1, 2, 3, 4, 5)
//   .pipe(takeLast(3))
//   .subscribe(v => console.log(v));

// of(1, 2)
//   .pipe(takeLast(5))
//   .subscribe(v => console.log(v));

interval(100)
  .pipe(takeLast(5))
  .subscribe(v => console.log(v));
