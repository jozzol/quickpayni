class PaymentController {
    constructor(subscriptionService) {
      this.subscriptionService = subscriptionService;
    }
  
    async getPaymentLink(req, res) {
      // let {body} = req.body
      try {
        // console.log('payment body 1 ')
        // console.log(req.body)
        const payment = await this.subscriptionService.createPayment(req, res);
  
        return res.json(payment);
      } catch (error) {
        console.log(error);
  
        return res
          .status(500)
          .json({ error: true, msg: "Failed to create payment" });
      }
    }
  
  }
  
  module.exports = PaymentController;