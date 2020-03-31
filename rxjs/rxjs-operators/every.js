const { of, timer } = require("rxjs");
const { tap, every, filter, takeUntil } = require("rxjs/operators");

// of(1, 2, 3, 4, 5)
//   .pipe(
//     tap(v => console.log(`Evaluating: ${v}`)),
//     every(x => x % 2 === 0)
//   )
//   .subscribe(v => console.log(v));

timer(0, 100)
  .pipe(
    filter(v => v % 2 === 0),
    tap(v => console.log(`Evaluating: ${v}`)),
    every(x => x % 2 === 0),
    takeUntil(timer(2000))
  )
  .subscribe(v => console.log(v));
