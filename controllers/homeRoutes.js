const router = require('express').Router();

const main = "../veiws/main.handlebars"
const index = "./index.handlebars"

const fs  = require("fs")

if (fs.existsSync(index)) {
    // path exists
    console.log("exists:", index);
  } else {
    console.log("DOES NOT exist:", path);
  }

router.get('/', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render(main, {layout : index});
    });

    module.exports = router;