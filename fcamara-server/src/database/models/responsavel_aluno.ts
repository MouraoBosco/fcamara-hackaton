import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { escola, escolaId } from './escola';
import type { listaMaterial, listaMaterialId } from './lista_material';

export interface responsavelAlunoAttributes {
  id_responsavel: number;
  nome_responsavel: string;
  sobrenome_responsavel: string;
  telefone_responsavel: string;
  email_responsavel: string;
  id_escola: number;
  codigo_responsavel: string;
}

export type responsavelAlunoPk = "id_responsavel";
export type responsavelAlunoId = responsavelAluno[responsavelAlunoPk];
export type responsavelAlunoCreationAttributes = Optional<responsavelAlunoAttributes, responsavelAlunoPk>;

export class responsavelAluno extends Model<responsavelAlunoAttributes, responsavelAlunoCreationAttributes> implements responsavelAlunoAttributes {
  id_responsavel!: number;
  nome_responsavel!: string;
  sobrenome_responsavel!: string;
  telefone_responsavel!: string;
  email_responsavel!: string;
  id_escola!: number;
  codigo_responsavel!: string;

  // responsavelAluno belongsTo escola via id_escola
  id_escola_escola!: escola;
  getId_escola_escola!: Sequelize.BelongsToGetAssociationMixin<escola>;
  setId_escola_escola!: Sequelize.BelongsToSetAssociationMixin<escola, escolaId>;
  createId_escola_escola!: Sequelize.BelongsToCreateAssociationMixin<escola>;
  // responsavelAluno hasMany listaMaterial via id_responsavel
  lista_materials!: listaMaterial[];
  getLista_materials!: Sequelize.HasManyGetAssociationsMixin<listaMaterial>;
  setLista_materials!: Sequelize.HasManySetAssociationsMixin<listaMaterial, listaMaterialId>;
  addLista_material!: Sequelize.HasManyAddAssociationMixin<listaMaterial, listaMaterialId>;
  addLista_materials!: Sequelize.HasManyAddAssociationsMixin<listaMaterial, listaMaterialId>;
  createLista_material!: Sequelize.HasManyCreateAssociationMixin<listaMaterial>;
  removeLista_material!: Sequelize.HasManyRemoveAssociationMixin<listaMaterial, listaMaterialId>;
  removeLista_materials!: Sequelize.HasManyRemoveAssociationsMixin<listaMaterial, listaMaterialId>;
  hasLista_material!: Sequelize.HasManyHasAssociationMixin<listaMaterial, listaMaterialId>;
  hasLista_materials!: Sequelize.HasManyHasAssociationsMixin<listaMaterial, listaMaterialId>;
  countLista_materials!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof responsavelAluno {
    responsavelAluno.init({
    id_responsavel: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome_responsavel: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    sobrenome_responsavel: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    telefone_responsavel: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    email_responsavel: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    id_escola: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'escola',
        key: 'id_escola'
      }
    },
    codigo_responsavel: {
      type: DataTypes.CHAR(64),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'responsavel_aluno',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_responsavel" },
        ]
      },
      {
        name: "id_escola",
        using: "BTREE",
        fields: [
          { name: "id_escola" },
        ]
      },
    ]
  });
  return responsavelAluno;
  }
}
