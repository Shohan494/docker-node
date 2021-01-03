const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Bye There');
});

app.get('/About', (req, res) => {
    res.send('How are you doing from About Page');
  });

app.listen(8080, () => {
  console.log('Listening on port 8080');
});