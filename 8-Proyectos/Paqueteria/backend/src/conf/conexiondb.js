var mysql = require ("mysql");
var conexion = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"",
    database:"paqueteria"
});

conexion.connect();
module.exports = conexion;