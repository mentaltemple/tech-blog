const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//NEED TO DEFINE COMMENT COLUMNS
class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

module.exports = Comment;
