const express = require('express');
const ProductService = require('../services/products.service');

const router = express.Router();

const service = new ProductService();

router.get('/', (req, res) => {
  const products = service.find();
  res.status(200).json(products);
});

router.get('/filter', (req, res) => {
  res.status(200).send('Yo soy un filter');
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.status(200).json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
})

router.put('/', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.status(200).json(product)
})

router.patch('/', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.status(200).json(product)
})

router.delete('/', (req, res) => {
  const { id } = req.params;
  const product = service.delete(id);
  res.status(200).json(product)
})

module.exports = router;
