const { interval, of } = require("rxjs");
const { concatMap, take, delay, map, mergeMap } = require("rxjs/operators");

// interval(1000)
//   .pipe(
//     take(3),
//     concatMap((x) => [x * 10, x * 2])
//   )
//   .subscribe((v) => console.log(v));

// of(1, 2, 3)
//   .pipe(concatMap((x) => [x, 3 * x]))
//   .subscribe((v) => console.log(v));

of(10, 1500, 1000, 500)
  .pipe(
    concatMap((delayMs) =>
      of(`Emitting after ${delayMs} ms`).pipe(delay(delayMs))
    )
  )
  .subscribe((v) => console.log(v));
