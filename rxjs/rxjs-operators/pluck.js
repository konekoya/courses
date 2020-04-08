const { of } = require("rxjs");
const { pluck } = require("rxjs/operators");

const friends = [
  { name: "Alice", birthday: "02/03", address: { state: "MA" } },
  { name: "Bob", birthday: "07/04", address: { state: "PA" } },
  { name: "Jane", birthday: "10/13", address: { state: "VA" } },
];

of(...friends)
  .pipe(pluck("birthday"))
  .subscribe((v) => console.log(v));

of(...friends)
  .pipe(pluck("address", "state"))
  .subscribe((v) => console.log(v));
