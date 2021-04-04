import { Request, Response } from "express";
import { initModels, escola } from '../database/models/init-models';
import sequelize from '../database/index';
import { Op } from "sequelize";

export default class EscolaController {
  async index (request: Request, response: Response): Promise<Response> {
    
    initModels(sequelize);

    try {
      const escolas = await escola.findAll();      

      return response.json(escolas);
    } catch (error) {
      console.log(error);
      return response.status(404).send("Nenhuma escola encontrada!");      
    }

  }

  async show (request: Request, response: Response): Promise<Response> {
    initModels(sequelize);

    const { nome, endereco } = request.params;

    let escolaBuscada;

    try {      
      if (nome) {
        escolaBuscada = await escola.findOne({
          where: { 
            nome_escola: {
              [Op.like]: '%'+ nome + '%' 
            }
          } 
        });
      } 
      /*else if (endereco) {
        escolaBuscada = await escola.findOne({
          where: { endereco_escola: '%' + endereco + '%' }
        });
      }*/

      return response.json(escolaBuscada);
    } catch (error) {
      return response.status(404).send("Escola não encontrada!");      
    }

  }
}