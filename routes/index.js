var express = require('express');
var router = express.Router();

// const PaymentController = require("./controller")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/payment', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
