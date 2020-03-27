const { of } = require("rxjs");
const { throwIfEmpty } = require("rxjs/operators");

of()
  .pipe(throwIfEmpty())
  .subscribe(
    v => console.log(v),
    err => console.log(`Oops: ${err}`)
  );
