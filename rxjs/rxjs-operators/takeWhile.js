const { of } = require("rxjs");
const { takeWhile } = require("rxjs/operators");

of(1, 2, 3, 1, 2, 3)
  .pipe(takeWhile(v => v < 4))
  .subscribe(v => console.log(v));
