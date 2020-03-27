const { interval } = require("rxjs");
const { tap } = require("rxjs/operators");

const foo$ = interval(1000);

foo$.subscribe(v => console.log(v));

setTimeout(() => {
  foo$.subscribe(v => console.log("another", v));
}, 1500);
