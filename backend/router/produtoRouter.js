const express = require('express');
const router = express.Router();

const produtoModel = require('../model/produto/ProdutoModel')
const RespostaClass = require('../model/RespostaClass')

router.get("/",function(req, resp, next){
    produtoModel.getTodos(function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro.';
            console.log('erro: ', erro);
        }else{
            resposta.dados = retorno;
        }
        resp.json(resposta);
    });
})

router.get("/:id?",function(req, resp, next){
    produtoModel.getId(req.params.id, function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro.';
            console.log('erro: ', erro);
        }else{
            resposta.dados = retorno;
        }
        resp.json(resposta);
    });
})



module.exports = router;