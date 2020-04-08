const { of, interval } = require("rxjs");
const { concatMapTo, take } = require("rxjs/operators");

interval(1000)
  .pipe(take(2), concatMapTo(of("a", "b")))
  .subscribe((v) => console.log(v));
