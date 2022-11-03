const express = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
const morgan   = require('morgan');

const port = 4000;
const db = process.env.MONGODB_URI || 'mongodb://127.0.0.1/mmmchanguches';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose
  .connect(db, { useNewUrlParser: true})
  .then(() => {
    console.log(`Database connected @${db}`);
  })
  .catch(err => {
    console.error(`Connection error ${err}`);
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})