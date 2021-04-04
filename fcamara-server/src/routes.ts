import express from 'express';
import ResponsavelController from './controllers/ResponsavelController';
import EscolaController from './controllers/EscolaController';
import BuscaEscolaController from './controllers/BuscaEscolaController';
import MaterialController from './controllers/MaterialController';

const routes = express.Router();

const responsavelController = new ResponsavelController();
const escolaController = new EscolaController();
const buscaEscolaController = new BuscaEscolaController();
const materialController = new MaterialController();

routes.get('/responsavel/:codigo_responsavel', responsavelController.show);
routes.post('/responsavel', responsavelController.create);

routes.get('/escola/:codigo_escola', escolaController.show);

routes.get('/buscaEscola', buscaEscolaController.index);
routes.get('/buscaEscola/:nome', buscaEscolaController.show);

routes.get('/material/:material_id', materialController.show);

export default routes;