import { Request, Response } from "express";
import { initModels, responsavelAluno, listaMaterial } from '../database/models/init-models';
import sequelize from '../database/index';

export default class ListaMaterialController {
  async create (request: Request, response: Response): Promise<Response> {
    initModels(sequelize);

    const { id_material, qtd_material, id_responsavel } = request.body;

    try {
      await listaMaterial.create({
        id_material, 
        qtd_material, 
        id_responsavel
      });
      
      return response.status(200);      
    } catch (error) {
      return response.status(500);
    }
  }
}