import { Request, Response } from "express";
import Escola from '../database/models/Escola';

export default class EscolaController {
  async show (request: Request, response: Response): Promise<Response> {
    const { codigo } = request.params;

    const escola = await Escola.findOne({
      where: { codigo: codigo }
    });

    if (escola) {
      return response.json(escola);
    } else {
      return response.status(404).send("Escola não encontrada!");
    }
  }
}