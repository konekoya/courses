// My solution

// function encode(string) {
//   const vowels = {
//     a: 1,
//     e: 2,
//     i: 3,
//     o: 4,
//     u: 5,
//   };

//   return [...string].map((letter) => vowels[letter] || letter).join("");
// }

// function decode(string) {
//   const vowels = {
//     "1": "a",
//     "2": "e",
//     "3": "i",
//     "4": "o",
//     "5": "u",
//   };

//   return [...string].map((letter) => vowels[letter] || letter).join("");
// }

// Best practice

function encode(string) {
  return string.replace(/[aeiou]/, (x) => "_aeiou".indexOf(x));
}

function decode(string) {
  return string.replace(/[1-5]/, (x) => "_aeiou".charAt(x));
}

console.log(encode("hello"));
console.log(decode("h2ll4"));
