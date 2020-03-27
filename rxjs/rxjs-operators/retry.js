const { of } = require("rxjs");
const { retry, map, catchError, filter } = require("rxjs/operators");

of("a", 1)
  .pipe(
    map(x => x.toUpperCase()),
    retry(2),
    catchError(err => of(undefined))
  )
  .subscribe(
    v => console.log(v),
    err => console.log(err)
  );
