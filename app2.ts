import express from 'express';
const app = express();

app.get('/xxx', function (req, res) {
  res.send('Hello world123');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});