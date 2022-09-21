const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
})

app.get('/users', (req, res) => {
  res.json([
    {
    id: 1,
    name: 'John Doe'
    },
    {
      id: 2,
      name: 'Cachilo'
    }
  ]);
});

app.get('/products', (req, res) => {
  res.json([
    {
    name: 'Producto 1',
    price: '$100'
    },
    {
      name: 'Producto 2',
      price: '$100'
    }
  ]);
});

app.get('/categories', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Categoria 1'
    },
    {
      id: 2,
      name: 'Categoria 2'
    }
  ]);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Producto 1',
    price: '$100'
  });
});

/* app.get('/users', (req, res) =>{
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.
  }
}) */

app.get('/categories/:categoryId/products/:productsId', (req, res) => {
  const { categoryId, productsId } = req.params;
  res.json({
    categoryId: categoryId,
    productId: productsId
  })
})

app.listen(port, () => {
  console.log('mi port ' + port);
});
