import { Request, Response } from "express";
import Escola from '../database/models/Escola';

export default class EscolaController {
  async index (request: Request, response: Response): Promise<Response> {
    const escolas = await Escola.findAll();

    if (escolas) {
      return response.json(escolas);
    } else {
      return response.status(404).send("Nenhuma escola encontrada!");
    }
  }

  async show (request: Request, response: Response): Promise<Response> {
    const { nome, endereco } = request.params;

    let escola;

    if (nome) {
      escola = await Escola.findOne({
        where: { nome: nome }
      });
    } 
    else if (endereco) {
      escola = await Escola.findOne({
        where: { endereco: endereco }
      });
    }
    

    if (escola) {
      return response.json(escola);
    } else {
      return response.status(404).send("Escola não encontrada!");
    }
  }
}