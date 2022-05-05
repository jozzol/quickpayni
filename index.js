const express = require("express");
const dotenv = require("dotenv");
const path = require('path');
var mercadopago = require('mercadopago');
const cookieParser = require("cookie-parser");
const logger = require("morgan");
var cors = require('cors');

const indexRouter = require("./routes/index");

const PORT = process.env.PORT || 3001;

const app = express();

dotenv.config();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

app.use("/", indexRouter);

module.exports = app;

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



