const router = require('express').Router();

router.get('/', (req, res, next)=>{
    res.render('../views/raiz.ejs');
});

module.exports = router;