const express = require('express');
const router = express.Router();
const Produto = require('./Produto');

router.get("/produtos", (req, res) => {
    res.render("produtos/index");
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

router.get("/produtos/", (req, res) => {
    Produto.findAll().then(produtos => {
        console.log(produtos);
    });
    res.render('index')
});
module.exports = router;
