const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const email = Joi.string().email();
const password = Joi.string().alphanum().min(8);

const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required(),
})

const updateUserSchema = Joi.object({
  name: name,
  email: email,
  password: password,
})

const deleteUserSchema = Joi.object({
  id: id.required()
})

module.exports = {
  createUserSchema,
  updateUserSchema,
  deleteUserSchema
}
