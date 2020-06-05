// function digital_root(n) {
//   const numberArray = splitNumbers(n);
//   const newN = numberArray.reduce((sum, num) => sum + num, 0);

//   if (newN >= 10) {
//     return digital_root(newN);
//   }

//   return newN;
// }

// function splitNumbers(numbers) {
//   return String(numbers).split("").map(Number);
// }

// function digital_root(n) {
//   console.log(n - 1);
//   return ((n - 1) % 9) + 1;
// }

function digital_root(n) {
  if (n < 10) return n;

  return digital_root(
    n
      .toString()
      .split("")
      .reduce((acc, d) => acc + +d, 0)
  );
}

console.log(digital_root(7));
console.log(digital_root(319294));
