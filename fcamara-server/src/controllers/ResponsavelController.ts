import { Request, Response } from "express";
import Responsavel from '../database/models/Responsavel';
import crypto from 'crypto';

export default class ResponsavelController {
  async show (request: Request, response: Response): Promise<Response> {
    const { codigo } = request.params;

    const responsavel = await Responsavel.findOne({
      where: { codigo: codigo }
    });

    if (responsavel) {
      return response.json(responsavel);
    } else {
      return response.status(404).send("Responsável não encontrado!");
    }
  }

  async create (request: Request, response: Response): Promise<Response> {
    const { nome, sobrenome, telefone, email, escola } = request.body;

    const codigo = crypto.createHash("sha256")
                         .update((nome + sobrenome + escola))
                         .digest("base64");

    Responsavel.create({
      nome,
      sobrenome,
      telefone,
      email,
      escola,
      codigo
    });
    
    return response.status(200).json(codigo);
  }
}