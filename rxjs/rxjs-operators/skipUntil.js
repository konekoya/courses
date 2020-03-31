const { timer } = require("rxjs");
const { skipUntil, take } = require("rxjs/operators");

timer(0, 1000)
  .pipe(take(6), skipUntil(timer(3000)))
  .subscribe(v => console.log(v));
