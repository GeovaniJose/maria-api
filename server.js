const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect(
    //'mongodb://usermaria:passmaria10@ds241133.mlab.com:41133/maria-api-db',
    process.env.MONGOLAB_URI,
    { useNewUrlParser: true }
);
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(process.env.PORT|| 3001, () => console.log("Servidor ouvindo..."));