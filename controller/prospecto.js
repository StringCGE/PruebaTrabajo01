const router = require('express').Router();
const sql = require('../model/MySQL_POOL.js');

router.get('/page/web',(req, res, next)=>{
    sql.ejecutar("SELECT * FROM basededatos.prospecto;",(err, result)=>{
        if (err) throw err;
        console.log(result)
        res.render(`../views/prospecto/list.ejs`, {result:result});
    });
});
router.post('/page/web',(req, res, next)=>{
    res.render(`../views/prospecto/add.ejs`);
});
router.put('/page/web',(req, res, next)=>{
    res.render(`../views/prospecto/alter.ejs`);
});

router.get('/', (req, res, next)=>{
    //res.send("GET /prospecto");
    sql.ejecutar("SELECT * FROM basededatos.prospecto;",(err, result)=>{
        if (err) throw err;
        res.json(result);
    });
});

router.get('/:id', (req, res, next)=>{
    console.log(`GET /prospecto/:id ${req.params.id}`);
    let insertquery = "SELECT * FROM basededatos.prospecto where id=?;"
    let query = sql.mysql.format(insertquery, [req.params.id]);
    sql.ejecutar(query  ,(err, result)=>{
        if (err) throw err;
        res.json(result);
    });
});

router.post('/', (req, res, next)=>{
    console.log(`POST /prospecto/ ${req.params.id}`);
    if (req.params.name){

    }
    let insertquery = "INSERT INTO basededatos.prospecto (nombre) VALUES (?);"
    let query = sql.mysql.format(insertquery, [req.params.id]);
    sql.ejecutar(query  ,(err, result)=>{
        if (err) throw err;
        res.json(result);
    });
});
router.put('/', (req, res, next)=>{
    res.send("PUT /prospecto");
});
router.delete('/', (req, res, next)=>{
    res.send("DELETE /prospecto");
});

module.exports = router;