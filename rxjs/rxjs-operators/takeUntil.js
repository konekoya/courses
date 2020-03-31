const { timer } = require("rxjs");
const { takeUntil } = require("rxjs/operators");

timer(0, 100)
  .pipe(takeUntil(timer(300)))
  .subscribe(v => console.log(v));
