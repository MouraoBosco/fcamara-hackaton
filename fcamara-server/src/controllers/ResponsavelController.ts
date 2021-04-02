import { Request, Response } from "express";
import Responsavel from '../database/models/Responsavel';
import crypto from 'crypto';

export default class ResponsavelController {
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

  async create (request: Request, response: Response): Promise<Response> {
    const { nome, sobrenome, telefone, email, escola } = request.body;

    const codigo = crypto.createHmac("sha256", "Sentinelas do Saber")
                         .update((nome + sobrenome + escola))
                         .digest("hex");

    Responsavel.create({
      nome,
      sobrenome,
      telefone,
      email,
      escola,
      codigo
    });
    
    return response.status(200).json("Cadastro realizado com sucesso!");
  }
}