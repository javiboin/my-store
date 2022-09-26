const express = require('express');
const UserService = require('../services/users.service');

const router = express.Router();

const service = new UserService();

router.get('/', (req, res) => {
  const users = service.find();
  res.status(200).json(users);
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const users = service.findOne(id);
  res.status(200).json(users);
})

router.post('/', (req, res) => {
  const body = req.body;
  const newUser = service.create(body);
  res.status(201).json(newUser)
})

router.put('/', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const user = service.update(id, body);
  res.status(200).json(user)
})

router.patch('/', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const user = service.update(id, body);
  res.status(200).json(user)
})

router.delete('/', (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: 'delete',
    id,
  })
})

module.exports = router;
