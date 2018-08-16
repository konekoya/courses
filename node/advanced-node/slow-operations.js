const slowAdd = (a, b) => {
  for (let i = 0; i < 9999999999; i++) {}
  return a + b;
};

const a = slowAdd(3, 3);
const b = slowAdd(4, 4);
const c = slowAdd(5, 5);

console.log(a);
console.log(b);
console.log(c);
