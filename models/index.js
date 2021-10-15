const Post = require('./post');
const User = require('./user');
const Comment = require("./comment")



Post.belongsTo(User,{
    foreignKey: "id"
});

Comment.belongsTo(User,{
    foreignKey: "id"
});

Comment.belongsTo(Post,{
    foreignKey:"id"
});


module.exports = { User, Post, Comment};
