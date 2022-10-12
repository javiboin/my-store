const express = require('express');
const UserService = require('../services/users.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createUserSchema, updateUserSchema, getUserSchema } = require('../schemas/users.schema');

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

router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const users = service.findOne(id);
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
)

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = service.create(body);
      res.status(201).json(newUser)
    } catch (error) {
      next(error);
    }
  }
)

router.put('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = service.update(id, body);
      res.status(200).json(user)
    } catch (error) {
      next(error);
    }
  }
)

router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = service.update(id, body);
      res.status(200).json(user)
    } catch (error) {
      next(error);
    }
  }
)

router.delete('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = service.delete(id);
      res.status(200).json(user)
    } catch (error) {
      next(error);
    }
  }
)

module.exports = router;
