const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const users = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    users.push({
      name: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(20),
    })
  }
  res.json(users);
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Name 1',
    email: 'javi@gmail.com',
    password: 'Password'
  })
})

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  })
})

router.put('/', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  })
})

router.patch('/', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  })
})

router.delete('/', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'delete',
    id,
  })
})

module.exports = router;
