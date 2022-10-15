const { Model, Datatypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Datatypes.INTEGER
  },
  email: {
    allowNull: false,
    type: Datatypes.STRING,
  },
  password: {
    allowNull: false,
    type: Datatypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: Datatypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class User extends Model {
  static associate() {
    // models
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User };
