import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import mustacheExpress from "mustache-express";
import mainRoutes from './routes/index';
require('dotenv').config()
const server = express();
server.set('view engine', 'mustache');
server.set('views',path.join(__dirname, 'views'));
server.engine('mustache',mustacheExpress());
server.use(express.static(path.join(__dirname,'../public')));


//rotas
server.use(mainRoutes);

//Rota 404
server.use((req, res )=>{
    res.status(404).send('Pagina Não Encontrada');
});


server.listen(3000);