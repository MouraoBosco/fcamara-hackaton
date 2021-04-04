import { Request, Response } from "express";
import { responsavelAluno } from '../database/models/responsavel_aluno';
import crypto from 'crypto';

export default class ResponsavelController {
  async show (request: Request, response: Response): Promise<Response> {
    console.log("TESTE TESTANDO 123!!!! AQUI!! AQUI!!!")
    const { codigo_responsavel } = request.params;
    console.log(codigo_responsavel);

    const responsavel = await responsavelAluno.findOne({
      where: { codigo_responsavel: codigo_responsavel }
    });

    if (responsavel) {
      return response.json(responsavel);
    } else {
      return response.status(404).send("Responsável não encontrado!");
    }
  }

  async create (request: Request, response: Response): Promise<Response> {
    const { 
      nome_responsavel, sobrenome_responsavel, telefone_responsavel, 
      email_responsavel, id_escola 
    } = request.body;

    const codigo_responsavel = crypto.createHash("sha256")
                         .update((nome_responsavel + sobrenome_responsavel + email_responsavel))
                         .digest("base64");

    responsavelAluno.create({
      nome_responsavel,
      sobrenome_responsavel,
      telefone_responsavel,
      email_responsavel,
      id_escola,
      codigo_responsavel
    });

    return response.status(200).json(codigo_responsavel);
  }
}