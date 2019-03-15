'use strict';
const util=require('util')
const express = require('express');

// Constants
const PORT = 3014;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
  let str=util.inspect(req)
  res.status(500).jsonp({ now: (new Date()).toTimeString(),req: str });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
