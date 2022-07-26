const express = require('express');
const ProductService = require('../services/products.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema} = require('../schemas/products.schema');

const router = express.Router();
const service = new ProductService();

router.get('/', async (req, res) => {
  try {
    const products = await service.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

router.get('/filter', (req, res) => {
  res.status(200).send('Yo soy un filter');
})

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
  try {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
})

router.put('/',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.status(200).json(product)
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
})

router.patch('/',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.status(200).json(product)
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
})

router.delete('/',
  validatorHandler(getProductSchema, 'params'),
  async (req, res) => {
  try {
    const { id } = req.params;
    const product = await service.delete(id);
    res.status(200).json(product)
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
})

module.exports = router;
