const express = require("express");
require('dotenv').config();
const path = require('path');
var mercadopago = require('mercadopago');


mercadopago.configure({
    access_token: process.env.MERCADOACCESSS
});

var preference = {
  items: [
    {
      title: 'Test',
      quantity: 1,
      currency_id: 'ARS',
      unit_price: 10.5
    }
  ]
};

mercadopago.preferences.create(preference)



const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, './client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});



