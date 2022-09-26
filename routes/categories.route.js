const express = require('express');
const CategoryService = require('../services/categories.service');

const router = express.Router();
const service = new CategoryService();

router.get('/', (req, res) => {
  const categories = service.finc();
  res.status(200).json(categories);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const categories = service.findOne(id);
  res.status(200).json(categories);
})

router.post('/', (req, res) => {
  const body = req.body;
  const newCategory = service.create(body);
  res.status(201).json(newCategory)
})

router.put('/', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const category = service.update(id, body);
  res.status(200).json(category)
})

router.patch('/', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const category = service.update(id, body);
  res.status(200).json(category)
})

router.delete('/', (req, res) => {
  const { id } = req.params;
  const category = service.delete(id);
  res.status(200).json(category)
})

module.exports = router;
