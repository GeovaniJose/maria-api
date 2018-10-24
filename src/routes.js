const express = require('express');
const routes = express.Router();

const TituloController = require('./controllers/TituloController');

routes.get('/titulos', TituloController.index);
routes.get('/titulos/:id', TituloController.show);
routes.post('/titulos', TituloController.add);
routes.put('/titulos/:id', TituloController.update);
routes.delete('/titulos/:id', TituloController.destroy);

module.exports = routes;