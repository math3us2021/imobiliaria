const mysql = require('mysql2')
const database = "webii221"
const conexao = mysql.createConnection({
    user:"root",
    password:"ma020490@",
    host:"localhost",
    port:3306
})

conexao.connect((err) =>{
    if(err){
        console.log("ERRO MYSQL")
    }
    conexao.query("use " + database)
    console.log("Conexão mysql estabilizada")
})
module.exports = conexao