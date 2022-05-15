const router = require('express').Router();
const sql = require('../model/MySQL_POOL.js');
router.get('/', (req, res, next)=>{
    /*sql.ejecutar("SELECT * FROM basededatos.prueba;",(err, result)=>{
        if (err) throw err;
        res.json(result);
    });*/
    res.render('../views/raiz.ejs');
});

module.exports = router;