const { throwError, of } = require("rxjs");
const { catchError, map } = require("rxjs/operators");

console.log("# catch then rethrow the error");

throwError("error").pipe(
  catchError(err => {
    console.log(`caught an error ${err}`);
    return throwError(`re-thrown: ${err}!`);
  }),
  catchError(err => {
    console.log(err);
    return of(undefined);
  })
);
of(1, 2, 3)
  .pipe(map(x => x * 2))
  .subscribe(
    d => {
      if (d) console.log(d);
    },
    err => console.log(err),
    () => console.log("done")
  );

console.log("# catch something unexpected");

of("a", 1)
  .pipe(
    map(v => v.toUpperCase()),
    catchError(err => of(null))
  )
  .subscribe(
    value => value && console.log(value),
    err => console.log(err)
  );
