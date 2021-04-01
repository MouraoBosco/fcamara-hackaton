import { Request, Response } from "express";
import Responsavel from '../database/models/Responsavel';

export default class UsersController {
  async show (request: Request, response: Response): Promise<Response> {
    const { codigo } = request.body();

    const responsavel = await Responsavel.findOne({
      where: codigo
    });

    if (responsavel) {
      return response.json(responsavel);
    } else {
      return response.status(404).send("Responsável não encontrado!");
    }
  }

  /*async create (request: Request, response: Response): Promise<Response> {

    Responsavel.create();
  }*/
}