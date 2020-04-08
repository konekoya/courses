const { of } = require("rxjs");
const { startWith } = require("rxjs/operators");

of(3)
  .pipe(startWith(1, 2))
  .subscribe(v => console.log(v));
