const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const Produto = require('./produtos/Produto')
const ProdutosController = require ("./produtos/ProdutoController");

app.use('/', ProdutosController );

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o Banco de Dados");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//EJS como view engine
app.set('view engine', 'ejs');

//definindo a pasta de arquivos estaticos
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index");
});

