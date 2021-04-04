import { Request, Response } from "express";
import { initModels, material } from '../database/models/init-models';
import sequelize from '../database/index';

export default class EscolaController {
  async show (request: Request, response: Response): Promise<Response> {
    initModels(sequelize);

    const { id_material } = request.params;

    try {
      const materialBuscado = await material.findOne({
        where: { id_material }
      });
  
      return response.json(materialBuscado);      
    } catch (error) {
      return response.status(404).send("Material não encontrada!");      
    }
  }
}