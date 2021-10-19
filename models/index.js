const User = require('./User');
const Post = require('./post');
const Comment = require("./comment")

User.hasMany(Post, {
    foreignKey: "owner",
    onUpdate: "CASCADE"
})

Post.belongsTo(User, {
    foreignKey: "owner"
})

Post.hasMany(Comment,{
    foreignKey: "post_id",
    onDelete: "CASCADE"
})

User.hasMany(Comment,{
    foreignKey: "owner_id",
    onDelete: "CASCADE"
})

// Comment.belongsToMany(User, {
//     through: User
// })

// Comment.belongsToMany(Post,{
//     through: Post
// })




// Comment.belongsToMany(Post, {
//     through: Post
// })





module.exports = { User, Post, Comment };
