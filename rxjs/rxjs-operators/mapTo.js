const { of } = require("rxjs");
const { mapTo } = require("rxjs/operators");

of(1, 2, 3)
  .pipe(mapTo("number"))
  .subscribe(x => console.log(x));
