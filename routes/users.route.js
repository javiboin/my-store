const express = require('express');
const UserService = require('../services/users.service');

const router = express.Router();

const service = new UserService();

router.get('/', (req, res) => {
  try {
    const users = service.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const users = service.findOne(id);
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({
      message: error.messages
    })
  }
})

router.post('/', (req, res) => {
  try {
    const body = req.body;
    const newUser = service.create(body);
    res.status(201).json(newUser)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

router.put('/', (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const user = service.update(id, body);
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

router.patch('/', (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const user = service.update(id, body);
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

router.delete('/', (req, res) => {
  try {
    const { id } = req.params;
    const user = service.delete(id);
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

module.exports = router;
