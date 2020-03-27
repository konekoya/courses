const { of } = require("rxjs");
const { scan } = require("rxjs/operators");

of(1, 2, 3)
  .pipe(scan((acc, cur) => acc + cur, 0))
  .subscribe(v => console.log(v));
