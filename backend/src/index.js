require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('../api/db/db.js');
const routes = require('../api/routes/movies.js');
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);


app.listen(port, () => {
    console.log("Serwer backend START na porcie " + port);
  });