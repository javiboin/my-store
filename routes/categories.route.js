const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const categories = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    categories.push({
      name: faker.name.jobDescriptor()
    })
  }
  res.status(200).json(categories);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id === 999) {
    res.status(404).json({
      message: 'Not Found'
    })
  } else {
    res.status(200).json({
      id,
      name: 'Customer'
    })
  }
})

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  })
})

router.put('/', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(200).json({
    message: 'update',
    data: body,
    id,
  })
})

router.patch('/', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(200).json({
    message: 'update',
    data: body,
    id,
  })
})

router.delete('/', (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: 'delete',
    id,
  })
})

module.exports = router;
