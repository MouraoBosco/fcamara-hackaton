import { Request, Response } from "express";
import { listaMaterial } from "../database/models/lista_material";
import { initModels, responsavelAluno, responsavelAlunoAttributes } from '../database/models/init-models';
import sequelize from '../database/index';

import crypto from 'crypto';

export default class ResponsavelController {
  async show (request: Request, response: Response): Promise<Response> {
    initModels(sequelize);

    const { codigo_responsavel } = request.params;

    try {      
      const responsavel = await responsavelAluno.findOne({
        where: { codigo_responsavel: codigo_responsavel }
      });
            
      const materiais = await listaMaterial.findOne({
        where: { id_responsavel: responsavel.id_responsavel }
      });

      return response.json([responsavel, materiais]);
    } catch (error) {
      console.log("Error", error);
      return response.status(404).send("Responsável não encontrado!");
      
    }
  }

  async create (request: Request, response: Response): Promise<Response> {
    initModels(sequelize);

    const { 
      nome_responsavel, sobrenome_responsavel, telefone_responsavel, 
      email_responsavel, id_escola 
    } = request.body;


    const updateMessage = "IAFEI" + nome_responsavel + sobrenome_responsavel + email_responsavel;

    console.log(nome_responsavel, sobrenome_responsavel, telefone_responsavel, email_responsavel, id_escola);

    const codigo_responsavel = crypto.createHash("sha256")
                         .update(updateMessage)
                         .digest("base64");

    try {
      await responsavelAluno.create({
        nome_responsavel,
        sobrenome_responsavel,
        telefone_responsavel,
        email_responsavel,
        id_escola,
        codigo_responsavel
      });
  
      return response.status(200).json(codigo_responsavel);      
    } catch (error) {
      console.log("Error", error);
      return response.status(500).json("Problema ao cadastrar");
    }
  }
}