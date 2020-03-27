const { timer } = require("rxjs");
const { tap, take, map } = require("rxjs/operators");

timer(0, 500)
  .pipe(
    take(5),
    tap(v => {
      console.log(v);
    })
  )
  .subscribe(
    v => console.log("success:", v),
    e => console.log("error:", e),
    () => console.log("DONE")
  );
