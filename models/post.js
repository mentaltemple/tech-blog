const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//NEED TO DEFINE POST COLUMNS
class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

module.exports = Post;
