const { timer } = require("rxjs");

// Start the timer from the current time + 3 seconds
const startTime = new Date(new Date().getTime() + 3000);

timer(startTime, 1000).subscribe(v => console.log(v));
