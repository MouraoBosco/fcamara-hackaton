import { Request, Response } from "express";
import { initModels, escola } from '../database/models/init-models';
import sequelize from '../database/index';

export default class EscolaController {
  async show (request: Request, response: Response): Promise<Response> {
    initModels(sequelize);

    const { codigo_escola } = request.params;

    try {
      const escolaBuscada = await escola.findOne({
        where: { codigo_escola }
      });
  
      return response.json(escolaBuscada);      
    } catch (error) {
      return response.status(404).send("Escola não encontrada!");      
    }
  }
}