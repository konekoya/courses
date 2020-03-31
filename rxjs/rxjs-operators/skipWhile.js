const { of } = require("rxjs");
const { skipWhile, skip } = require("rxjs/operators");

of(1, 2, 3, 1, 2, 3)
  .pipe(skipWhile(v => v < 3))
  .subscribe(v => console.log(v));
