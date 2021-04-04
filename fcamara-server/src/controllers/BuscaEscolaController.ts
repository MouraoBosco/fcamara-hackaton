import { Request, Response } from "express";
import { escola } from '../database/models/escola';

export default class EscolaController {
  async index (request: Request, response: Response): Promise<Response> {
    const escolas = await escola.findAll();

    if (escolas) {
      return response.json(escolas);
    } else {
      return response.status(404).send("Nenhuma escola encontrada!");
    }
  }

  async show (request: Request, response: Response): Promise<Response> {
    const { nome, endereco } = request.params;

    let escolaBuscada;

    if (nome) {
      escolaBuscada = await escola.findOne({
        where: { nome_escola: '%'+ nome + '%' }
      });
    } 
    /*else if (endereco) {
      escolaBuscada = await escola.findOne({
        where: { endereco_escola: '%' + endereco + '%' }
      });
    }*/
    

    if (escolaBuscada) {
      return response.json(escolaBuscada);
    } else {
      return response.status(404).send("Escola não encontrada!");
    }
  }
}