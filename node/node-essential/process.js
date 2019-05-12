const grab = flag => {
  const indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
};

const greeting = grab("--greeting");
const name = grab("--name");

console.log(`${greeting} ${name}`);
