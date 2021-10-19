const sequelize = require('../config/connection');
const {User, Post, Comment} = require("../models")
const userData = require('./userData.json');
const postData = require("./postData.json")
const commentData = require("./commentData.json")
console.log(User)


const seedDatabase = async () => {

  await sequelize.sync({ force: true}).catch(function(err){console.log(err)});

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  })
  .catch(function(err){
    console.log(err)
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      owner: users[Math.floor(Math.random() * users.length)].id,
    }).catch(function(err){
      console.log(err)
    });
    
  }
for (const comment of commentData) {
      await Comment.create({
        ...comment,
        owner_id: users[Math.floor(Math.random() * users.length)].id,
        post_id: "1"
      }).catch(function(err){
        console.log(err)
      });}

  process.exit(0);

};

seedDatabase();
