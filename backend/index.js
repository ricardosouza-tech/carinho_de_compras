const express = require ('express');
const bodyparser = require ('body-parser');
const cors = require('cors');

const app = express()
const porta = 8000;
const router = express.Router(); //Mecanismo de rotas

const produtoRouter = require('./router/produtoRouter')



app.use(cors());

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json({linit: '20mb', extended: true}));

router.get("/", (req, resp)=>{
    resp.json({mensagem: '=> API ononline...'})
});

app.use("/", router);
app.use("/produto", produtoRouter);

app.listen(porta);
console.log('Run API Express');