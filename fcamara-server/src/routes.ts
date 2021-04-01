import express from 'express';
import ResponsavelController from './controllers/ResponsavelController';

const routes = express.Router();

const responsavelController = new ResponsavelController();

routes.get('/responsavel/:codigo', responsavelController.show);

export default routes;