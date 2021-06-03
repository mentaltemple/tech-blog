const User = require("./users");
const Post = require("./posts");
const Comment = require("./comments");

//NEED TO DEFINE ASSOCIATIONS
Post.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Post.hasMany(Comment, {
  foreignKey: "postId",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

module.exports = {
  Post,
  Comment,
  User,
};
