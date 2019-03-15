'use strict';

const express = require('express');

// Constants
const PORT = 3014;
const HOST = 'www.cumthyb.site';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
