const express = require('express');
const router = express.Router();
const Produto = require("./Produto");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
//app.use(express.bodyParser());

router.get("/produtos", (req, res) => {
    Produto.findAll({ raw: true }).then(produtos => {
        res.render("produtos/index", {
            produtos: produtos
        });
    });
});

router.get("/produto/novo", (req, res) => {
    res.render("produtos/novo");
});

router.post("/salvarProduto", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Produto.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/')
    });
});

router.post("/produto/delete", (req, res)=> {
    var id = req.body.id;
    if(id != undefined)
        if(!isNaN(id))
    Produto.destroy({
        where : {
            id : id
        }
    }).then(()=>{
        res.redirect("produtos");
    })
})
module.exports = router;
