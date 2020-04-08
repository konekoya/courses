const { of } = require("rxjs");
const { reduce } = require("rxjs/operators");

of(1, 2, 3)
  .pipe(reduce((acc, cur) => acc + cur, 0))
  .subscribe((v) => console.log(v));
