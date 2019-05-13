const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
  currentTime += waitInterval;
  const p = Math.floor((currentTime / waitTime) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Waiting ... ${p}%`);
};

console.log(`Setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  console.log("done");
  clearInterval(interval);
};

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);
