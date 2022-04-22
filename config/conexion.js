var mysql = require('mysql');
var con= mysql.createConnection({
    host: 'localhost',
    user:"root",
    password:"",
    database:'biblioteca',
})

con.connect(
    (err)=>{
        if(!err){
            console.log("conexion establecida");
        }else{
            console.los("error en conexion" + err);
        }
    }
);
module.exports = con;