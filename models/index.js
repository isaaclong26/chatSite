const Post = require('./post');
const User = require('./user');
const Comment = require("./comment")



// Post.belongsTo(User,{
//     foreignKey: "id"
// });

// Comment.belongsToMany(User,{
//     through: User
// });


// Comment.belongsToMany(Post,{
//     through:Post
// });



module.exports = { User, Post, Comment};
