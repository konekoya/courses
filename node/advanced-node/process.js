process.on('exit', code => {
  console.log(`About to exit with code: ${code}`);
});

process.on('uncaughtException', err => {
  console.error(err);

  process.exit(1);
});

process.stdin.resume();

console.dog();
