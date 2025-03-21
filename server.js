//CONFIGURAR BACKEND
//Criar duas variáveis - Consumir framework expresse instância
const express = require('express')
const app = express();

//Rota para os arquivos estáticos (public)
app.use(express.static('public'));

//Qual porta irá rodar
app.listen(3000, () =>{
    console.log("Servidor rodando no link http://localhost:3000")
})
