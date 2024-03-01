const routes = require ('express').Router();
routes.get('/h',(req,res)=>{
    res.send('ruta principal')
});

module.exports=routes;

const consulta = require ('../conf/conexiondb.js');

//Consultar DB
routes.get ('/paqueteria/get',(req,res)=>{
    //let sql = 'SELECT * FROM paquete';
    let sql = 'SELECT id_paquete, nombre_cliente, dir_envio, contenido, tp_pago FROM paquete INNER JOIN tipo_pago ON paquete.fk_pago = tipo_pago.id_pago INNER JOIN tipo_paquete ON paquete.fk_tp_paquete = tipo_paquete.id_tp_paquete INNER JOIN clientes ON paquete.fk_clientes = clientes.id_cliente INNER JOIN envios ON paquete.fk_envios = envios.id_envio ORDER BY id_paquete';

    consulta.query(sql, (err,rows)=>{
        if(!err) 
        res.json(rows);
        else
        console.error(err);
    })
})

//Consulta Id
routes.get ('/paqueteria/getFk',(req,res)=>{
    const {id_paquete} = req.params;
    let sql = 'SELECT * FROM paquete';
        
    consulta.query(sql,[id_paquete],(err,rows)=>{
        if(!err) 
        res.json(rows);
        else
        console.error(err);
    })
})

//Consulta by Id
routes.get ('/paqueteria/get/:id_paquete',(req,res)=>{
    const {id_paquete} = req.params;
    let sql = 'SELECT id_paquete, nombre_cliente, dir_envio, contenido, tp_pago FROM paquete INNER JOIN tipo_pago ON paquete.fk_pago = tipo_pago.id_pago INNER JOIN tipo_paquete ON paquete.fk_tp_paquete = tipo_paquete.id_tp_paquete INNER JOIN clientes ON paquete.fk_clientes = clientes.id_cliente INNER JOIN envios ON paquete.fk_envios = envios.id_envio WHERE paquete.id_paquete = ?';
    
    consulta.query(sql,[id_paquete],(err,rows)=>{
        if(!err) 
        res.json(rows);
        else
        console.error(err);
    })
})

//Insertar datos DB
routes.post('/paqueteria/post',(req,res)=>{
    const {fk_pago} = req.body;
    const {fk_tp_paquete} = req.body;
    const {fk_clientes} = req.body;
    const {fk_envios} = req.body;
    let sql = "INSERT INTO `paqueteria`.`paquete` (`fk_pago`, `fk_tp_paquete`, `fk_clientes`, `fk_envios`) VALUES ('"+ fk_pago+"', '"+fk_tp_paquete+"', '"+fk_clientes+"', '"+fk_envios+"')";

    consulta.query(sql,(err,rows)=>{
        if(!err)
        res.json('Dato insertado');
        else
        console.error(err);
    })
})

//Actualizar datos DB
routes.put('/paqueteria/put/:id_paquete',(req,res)=>{
    const {fk_pago} = req.body;
    const {fk_tp_paquete} = req.body;
    const {fk_clientes} = req.body;
    const {fk_envios} = req.body;
    const {id_paquete} = req.body;
    let sql = "UPDATE `paqueteria`.`paquete` SET `fk_pago` = '"+fk_pago+"', `fk_tp_paquete` = '"+fk_tp_paquete+"', `fk_clientes` = '"+fk_clientes+"', `fk_envios` = '"+fk_envios+"' WHERE id_paquete = ?";

    consulta.query(sql,[id_paquete],(err,rows)=>{
        if(!err)
        res.json('Dato actualizado');
        else
        console.error(err);
    })
})

//Eliminar datos DB
routes.delete('/paqueteria/delete/:id_paquete',(req,res)=>{
    const {id_paquete} = req.params;
    let sql = 'DELETE FROM paqueteria.paquete WHERE paquete.id_paquete = ?';

    consulta.query(sql,[id_paquete],(err,rows)=>{
        if(!err)
        res.json('Dato eliminado');
        else
        console.error(err);
    })
})