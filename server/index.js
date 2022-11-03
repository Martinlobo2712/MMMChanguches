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

const main = async () => { 
  try {
    await mongoose.connect(db);

    console.log(`Database connected @${db}`);

    app.listen(port, () => {
      console.log(`App listening on port ${port}`)
    });
  } catch (err) {
    console.error(`Connection error ${err}`);
  }
}

main();