const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

// Do work here
router.get('/', storeController.middleware, storeController.homePage);

router.get('/reverse/:name', (req, res) => {
  const reverse = req.params.name.reverse().join;
  console.log(req.params);
});

module.exports = router;
