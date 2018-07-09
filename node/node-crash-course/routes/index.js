const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.render('hello', { title: 'I love food' });
});

router.get('/reverse/:name', (req, res) => {
  const reverse = req.params.name.reverse().join;
  console.log(req.params);
});

module.exports = router;
