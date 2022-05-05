const axios = require("axios");
require('dotenv').config()

class PaymentService {
  async createPayment(req, res) {

    // console.log('payment body 2')
    // console.log(req.body)

    const {payer_email, title, description, picture_url, category_id, quantity, unit_price, back_urls} = req.body
    const items = [
      {
        title: title,
        description: description,
        picture_url: picture_url,
        category_id: category_id,
        quantity: quantity,
        unit_price: Number(unit_price)
      }
    ]

    const body2 = {payer_email, items, back_urls}

    // console.log(body2)

    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
      payer_email: "test_user_77335685@testuser.com",
      items: [
        {
          title: "Dummy Title",
          description: "Dummy description",
          picture_url: "http://www.myapp.com/myimage.jpg",
          category_id: "category123",
          quantity: 1,
          unit_price: 10
        }
      ],
      back_urls: {
        failure: "/failure",
        pending: "/pending",
        success: "/success"
      }
    };
    // console.log('payment body test')
    // console.log(body)

    const payment = await axios.post(url, body2, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MERCADOACCESSS}`
      }
    });

    return payment.data;
  }

}

module.exports = PaymentService;