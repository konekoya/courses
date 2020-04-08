const { of, empty } = require("rxjs");
const { expand, take } = require("rxjs/operators");

of(1)
  .pipe(
    expand((x) => {
      if (x < 10) return of(x + 1);

      return empty();
    })
  )
  .subscribe((v) => console.log(v));
