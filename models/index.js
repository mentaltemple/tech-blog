const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");

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
