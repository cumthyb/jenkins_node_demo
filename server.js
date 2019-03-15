'use strict';

const express = require('express');

// Constants
const PORT = 3014;
const HOST = '172.17.39.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
  res.send((new Date()).toDateString());
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
