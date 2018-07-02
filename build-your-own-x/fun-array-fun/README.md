# Have fun playing with Array methods

These are real world problems that people have submitted to stackoverflow.com
I try to tackle them before knowing or peeking into the answers. Often, I don't have the best solutions but the pleasure of trying to solve these problems is really really fun. 😍😍😍

## ES6 .filter within a filter

OP: [stackoverflow link](https://stackoverflow.com/questions/51128388/es6-filter-within-a-filter)

OP in short:

- Pick the array item when it has a specific string value.
- Don't want to use two filters for this problem.

Data:

```json
[
  {
    "id": 0,
    "title": "happy dayys",
    "owner": { "id": "1", "username": "dillonraphael" },
    "tags": [{ "value": "Art", "label": "Art" }],
    "items": []
  },
  {
    "id": 1,
    "title": "happy dayys",
    "owner": { "id": "1", "username": "dillonraphael" },
    "tags": [{ "value": "Architecture", "label": "Architecture" }],
    "items": []
  },
];
```

My solution:
For me, it looks more like a `reduce()` problem. But it turned out to be `some()` is the best fit.

```js
const result = data.reduce((acc, obj) => {
  const isTarget = obj.tags.some(({ value }) => value === 'Art');

  if (isTarget) {
    acc.push(obj);
  }

  return acc;
}, []);
```

Best solution:

```js
const name = 'Architecture';
const result = data.filter(x => {
  return x.tags.some(({ value }) => value === name);
});
```

## How to remove objects with the same key and value pair in arrays

OP: [stackoverflow link](https://stackoverflow.com/questions/51088882/how-to-remove-objects-with-the-same-key-and-value-pair-in-arrays/51089016#51089016)

OP in short:

Given the array below

```js
[
  { a: 1 },
  { a: 2 },
  { c: 3 },
  { b: 1 },
  { a: 1 },
  { c: 3 },
  { c: 4 },
  { a: 1 },
];
```

The end result should be:

```js
[{ a: 1 }, { a: 2 }, { c: 3 }, { b: 1 }, { c: 4 }];
```

Data: same as in the OP in short.

My solution: didn't figure this out :p

Best solution:

```js
let unique = array.reduce((res, itm) => {
  // Test if the item is already in the new array
  let result = res.find(item => JSON.stringify(item) == JSON.stringify(itm));

  // If not lets add it
  if (!result) return res.concat(itm);

  // If it is just return what we already have
  return res;
}, []);

console.log(unique);
```
