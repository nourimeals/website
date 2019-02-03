const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/index.html'));
});

app.listen(port, (req, res) => {
  console.log(`Server listening on port: ${port}`);
});