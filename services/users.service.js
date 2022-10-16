const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

//const getConnection = require('../libs/postgres');
const { models } = require('../libs/sequelize');

class UserService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(20),
      });
    }
  }

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
/*     const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser; */
  }

  async find() {
    const data = await models.User.findAll();
    return data;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    };
    return user;
/*     const user = this.users.find(item => item.id === id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user; */
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
/*     const index = this.users.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('user not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    }
    return this.users[index]; */
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
/*     const index = this.users.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('user not found');
    }
    this.users.splice(index, 1);
    return { id };
  } */
  }
};

module.exports = UserService;
