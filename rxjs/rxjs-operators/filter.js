const { of } = require("rxjs");
const { filter } = require("rxjs/operators");

of(1, 2, 3, 1, 2, 3)
  .pipe(filter(v => v < 3))
  .subscribe(v => console.log(v));
