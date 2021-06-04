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
    freezeTableName: true,
  }
);

module.exports = Comment;
