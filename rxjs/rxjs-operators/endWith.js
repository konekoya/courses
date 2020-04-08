const { of } = require("rxjs");
const { endWith } = require("rxjs/operators");

const workingDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const weekends = ["Saturday", "Sunday"];

of(...workingDays)
  .pipe(endWith(...weekends))
  .subscribe(v => console.log(v));
