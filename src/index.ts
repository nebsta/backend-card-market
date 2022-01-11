import express = require('express');
import mongo = require('mongodb');

import dotenv = require('dotenv')
dotenv.config();

mongo.MongoClient.connect(process.env.MONGODB_CON, (err, client) => {
  console.log(`connection done. Error: ${err}. Client: ${client}`)
});

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
