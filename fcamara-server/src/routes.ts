import express from 'express';
import ResponsavelController from './controllers/ResponsavelController';
import EscolaController from './controllers/EscolaController';
import BuscaEscolaController from './controllers/BuscaEscolaController';

const routes = express.Router();

const responsavelController = new ResponsavelController();
const escolaController = new EscolaController();
const buscaEscolaController = new BuscaEscolaController();

routes.get('/responsavel/:codigo_responsavel', responsavelController.show);
routes.post('/responsavel', responsavelController.create);

routes.get('/escola/:codigo_escola', escolaController.show);

routes.get('/buscaEscola', buscaEscolaController.index);
routes.get('/buscaEscola/:nome?/:endereco?', buscaEscolaController.show);

export default routes;