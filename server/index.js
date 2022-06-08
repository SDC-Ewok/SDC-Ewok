require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const controllers = require('../controllers/index.js');
const PORT = process.env.PORT || 3000;

app.get('/products', (req, res) =>(
  res.send('Hello world!')
));

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
module.exports.app = app;
