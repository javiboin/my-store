const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/products', (req, res) => {
  res.json({
    name: 'Producto 1',
    price: '$100'
  });
})

app.listen(port, () => {
  console.log('mi port ' + port);
});
