const { of, timer } = require("rxjs");
const { skip, take } = require("rxjs/operators");

// of(1, 2, 3, 4, 5)
//   .pipe(skip(3))
//   .subscribe(v => console.log(v));

timer(0, 100)
  .pipe(skip(5), take(20))
  .subscribe(v => console.log(v));
