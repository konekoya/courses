const { of } = require("rxjs");
const { bufferCount } = require("rxjs/operators");

// of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
//   .pipe(bufferCount(3))
//   .subscribe(value => console.log(value));

of(1, 2, 3, 4, 5, 6, 7)
  .pipe(bufferCount(2))
  .subscribe(sequence => console.log(sequence));
