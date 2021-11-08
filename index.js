import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.end('Express works!!!');
});

app.listen(3000, () => {
  console.log('Server now running on port 3000... ');
});