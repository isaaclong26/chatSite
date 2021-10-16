const router = require('express').Router();
const {Comment, User, Post} = require("../../models")

// get all users 
router.get("/", (req,res)=>{
    Comment.findAll({
        
      }).then((CommentData) => {
        res.json(CommentData);
    
      });


})
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Comment.findByPk(req.params.id,{
    
  }).then((userData) => {
    res.json(userData);
  });
});

router.post("/",(req,res)=>{
  Comment.create(req.body)
  .then((newComment) => {
    res.json(newComment);
  })
  .catch((err) => {
    res.json(err);
  });


})

module.exports = router;