const { interval } = require("rxjs");
const { buffer, take, delay, delayWhen } = require("rxjs/operators");

console.log("# emit the buffer after 1000 ms");

interval(100)
  .pipe(buffer(interval(1000)), take(4))
  .subscribe(d => {
    console.log(d);
  });
