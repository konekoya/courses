const { timer } = require("rxjs");
const { take } = require("rxjs/operators");

timer(0, 100)
  .pipe(take(5))
  .subscribe(v => console.log(v));
