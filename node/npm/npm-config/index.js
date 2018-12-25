const express = require('express');

const app = express();

const PORT = 3030;

console.log(process.env);
console.log(process.env.npm_package_config_port);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, () => {
  console.log('server is running at', PORT);
});
