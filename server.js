const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>AWS EC2 READY</h1>');
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});
