import type { Sequelize, Model } from "sequelize";
import { doacao } from "./doacao";
import type { doacaoAttributes, doacaoCreationAttributes } from "./doacao";
import { doador } from "./doador";
import type { doadorAttributes, doadorCreationAttributes } from "./doador";
import { escola } from "./escola";
import type { escolaAttributes, escolaCreationAttributes } from "./escola";
import { listaMaterial } from "./lista_material";
import type { listaMaterialAttributes, listaMaterialCreationAttributes } from "./lista_material";
import { material } from "./material";
import type { materialAttributes, materialCreationAttributes } from "./material";
import { responsavelAluno } from "./responsavel_aluno";
import type { responsavelAlunoAttributes, responsavelAlunoCreationAttributes } from "./responsavel_aluno";

export {
  doacao,
  doador,
  escola,
  listaMaterial,
  material,
  responsavelAluno,
};

export type {
  doacaoAttributes,
  doacaoCreationAttributes,
  doadorAttributes,
  doadorCreationAttributes,
  escolaAttributes,
  escolaCreationAttributes,
  listaMaterialAttributes,
  listaMaterialCreationAttributes,
  materialAttributes,
  materialCreationAttributes,
  responsavelAlunoAttributes,
  responsavelAlunoCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  doacao.initModel(sequelize);
  doador.initModel(sequelize);
  escola.initModel(sequelize);
  listaMaterial.initModel(sequelize);
  material.initModel(sequelize);
  responsavelAluno.initModel(sequelize);

  doacao.belongsTo(doador, { as: "id_doador_doador", foreignKey: "id_doador"});
  doador.hasMany(doacao, { as: "doacaos", foreignKey: "id_doador"});
  doacao.belongsTo(escola, { as: "id_escola_escola", foreignKey: "id_escola"});
  escola.hasMany(doacao, { as: "doacaos", foreignKey: "id_escola"});
  responsavelAluno.belongsTo(escola, { as: "id_escola_escola", foreignKey: "id_escola"});
  escola.hasMany(responsavelAluno, { as: "responsavel_alunos", foreignKey: "id_escola"});
  listaMaterial.belongsTo(material, { as: "id_material_material", foreignKey: "id_material"});
  material.hasMany(listaMaterial, { as: "lista_materials", foreignKey: "id_material"});
  listaMaterial.belongsTo(responsavelAluno, { as: "id_responsavel_responsavel_aluno", foreignKey: "id_responsavel"});
  responsavelAluno.hasMany(listaMaterial, { as: "lista_materials", foreignKey: "id_responsavel"});

  return {
    doacao: doacao,
    doador: doador,
    escola: escola,
    listaMaterial: listaMaterial,
    material: material,
    responsavelAluno: responsavelAluno,
  };
}
