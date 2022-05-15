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
    let _sexo;
    let _nacionalidad;
    sql.ejecutar("SELECT * FROM basededatos.sexo;",(err, result)=>{
        if (err) throw err;
        console.log(result);
        _sexo = result;
        sql.ejecutar("SELECT * FROM basededatos.nacionalidad;",(err, result)=>{
            if (err) throw err;
            console.log(result);
            _nacionalidad =result
            res.render(`../views/prospecto/add.ejs`,{
                sexo:_sexo,
                nacionalidad:_nacionalidad
            });
        });
    });
    
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
    console.log(`POST /prospecto/ ${req.body}`);
    let arr = [
        req.body.cedula,
        req.body.p_nombre,
        req.body.s_nombre,
        req.body.p_apellido,
        req.body.s_apellido,
        req.body.fk_sexo,
        req.body.fk_nacionalidad,
        req.body.fecha_nac,
        req.body.email,
        req.body.celular_1,
        req.body.celular_2,
        req.body.dir_domicilio
    ];
    //res.render(req.body);
    console.log(arr);
    
    let insertquery = "INSERT INTO basededatos.prospecto (cedula, p_nombre, s_nombre, p_apellido, s_apellido, fk_sexo, fk_nacionalidad, fecha_nac, email, celular_1, celular_2, dir_domicilio) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);"
    let query = sql.mysql.format(insertquery, arr);
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