const express = require('express');
const CategoryService = require('../services/categories.service');

const router = express.Router();
const service = new CategoryService();

router.get('/', async (req, res) => {
  try {
    const categories = await service.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const categories = await service.findOne(id);
    res.status(200).json(categories);
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

router.post('/', async (req, res) => {
  try {
    const body = req.body;
    const newCategory = await service.create(body);
    res.status(201).json(newCategory)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

router.put('/', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const category = await service.update(id, body);
    res.status(200).json(category)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

router.patch('/', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const category = await service.update(id, body);
    res.status(200).json(category)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

router.delete('/', async (req, res) => {
  try {
    const { id } = req.params;
    const category = await service.delete(id);
    res.status(200).json(category)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

module.exports = router;
