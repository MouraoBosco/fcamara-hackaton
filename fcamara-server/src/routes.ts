import express from 'express';
import ResponsavelController from './controllers/ResponsavelController';
import EscolaController from './controllers/EscolaController';
import BuscaEscolaController from './controllers/BuscaEscolaController';
import MaterialController from './controllers/MaterialController';
import ListaMaterialController from './controllers/ListaMaterialController';

const routes = express.Router();

const responsavelController = new ResponsavelController();
const escolaController = new EscolaController();
const buscaEscolaController = new BuscaEscolaController();
const materialController = new MaterialController();
const listaMaterialController = new ListaMaterialController();

routes.get('/responsavel/:codigo_responsavel', responsavelController.show);
routes.post('/responsavel', responsavelController.create);

routes.get('/escola/:codigo_escola', escolaController.show);

routes.get('/buscaEscola', buscaEscolaController.index);
routes.get('/buscaEscola/:nome', buscaEscolaController.show);

routes.get('/material/:id_material', materialController.show);

routes.post('/listaMaterial', listaMaterialController.create);

export default routes;