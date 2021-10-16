const router = require('express').Router();
const {Post, User, Comment} = require("../../models")

// get all users 
router.get("/", (req,res)=>{
    Post.findAll({
        
      }).then((PostData) => {
        res.json(PostData);
    
      });


})
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Post.findByPk(req.params.id,{
    
  }).then((userData) => {
    res.json(userData);
  });
});

router.post("/",(req,res)=>{
  Post.create(req.body)
  .then((newPost) => {
    res.json(newPost);
  })
  .catch((err) => {
    res.json(err);
  });


})

module.exports = router;