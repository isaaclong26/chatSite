const router = require('express').Router();

const main = "../veiws/main.handlebars"

router.get('/', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render(main, {layout : 'index'});
    });

    module.exports = router;