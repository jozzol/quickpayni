const express = require('express');
const router = express.Router();

const PaymentController = require("../controller/PaymentController");
const PaymentService = require("../services/PaymentService");
const PaymentInstance = new PaymentController(new PaymentService());

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.json({
    "/payment": "generates a payment link"
  })
});

router.post('/payment', async function(req, res, next) {
  // const {items} = req.body
  // console.log('paymentBody ' + items)
  // console.log(items)
  await PaymentInstance.getPaymentLink(req, res)
});

module.exports = router;
