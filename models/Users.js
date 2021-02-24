const { Model, DataTypes } = require("sequelize");
//install hashng for passwords
const bcrypt = require("bcrypt");
//may need to address address based on final folder architecture
const sequelize = require("../config/connection");

class Users extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(75),
      allowNull: false,
      validate: {
        //means password must be at least 4 characters long
        len: [4, 30],
      },
    },
  },
  {
    hooks: {
      // set up beforeUpdate lifecycle "hook" functionality  
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },

    sequelize,
    modelName: "users",
    timestamps: false,
    paranoid: false,
    freezeTableName: true,
    underscored: true,
  }
);
module.exports = Users;
