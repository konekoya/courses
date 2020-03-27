const R = require("ramda");

const query = "?page=2&pageSize=10&total=203";

const parse = R.compose(R.fromPairs, R.map(R.split("=")), R.split("&"), R.tail);

const result = parse(query);

console.log(result);

console.log(query);
