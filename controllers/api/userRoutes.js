const router = require('express').Router();
const {User, Post, Comment} = require("../../models")

// get all users 
router.get("/", (req,res)=>{
    User.findAll({
        
      }).then((UserData) => {
        res.json(UserData);
    
      });


})
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  User.findByPk(req.params.id,{
    
  }).then((userData) => {
    res.json(userData);
  });
});

router.post("/",(req,res)=>{
  User.create(req.body)
  .then((newUser) => {
    res.json(newUser);
  })
  .catch((err) => {
    res.json(err);
  });


})

module.exports = router;