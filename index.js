const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 500;

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(port, (req, res) => {
  console.log(`Server listening on port: ${port}`);
});