import { Request, Response } from "express";
import { escola } from '../database/models/escola';

export default class EscolaController {
  async show (request: Request, response: Response): Promise<Response> {
    const { codigo_escola } = request.params;

    const escolaBuscada = await escola.findOne({
      where: { codigo_escola: codigo_escola }
    });

    if (escolaBuscada) {
      return response.json(escolaBuscada);
    } else {
      return response.status(404).send("Escola não encontrada!");
    }
  }
}