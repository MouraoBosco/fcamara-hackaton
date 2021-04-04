import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { doacao, doacaoId } from './doacao';
import type { responsavelAluno, responsavelAlunoId } from './responsavel_aluno';

export interface escolaAttributes {
  id_escola: number;
  nome_escola: string;
  descricao_escola: string;
  foto_escola: any;
  tipo_escola: string;
  tipo_conta: string;
  agencia_conta: string;
  numero_conta: string;
  codigo_escola: string;
}

export type escolaPk = "id_escola";
export type escolaId = escola[escolaPk];
export type escolaCreationAttributes = Optional<escolaAttributes, escolaPk>;

export class escola extends Model<escolaAttributes, escolaCreationAttributes> implements escolaAttributes {
  id_escola!: number;
  nome_escola!: string;
  descricao_escola!: string;
  foto_escola!: any;
  tipo_escola!: string;
  tipo_conta!: string;
  agencia_conta!: string;
  numero_conta!: string;
  codigo_escola!: string;

  // escola hasMany doacao via id_escola
  doacaos!: doacao[];
  getDoacaos!: Sequelize.HasManyGetAssociationsMixin<doacao>;
  setDoacaos!: Sequelize.HasManySetAssociationsMixin<doacao, doacaoId>;
  addDoacao!: Sequelize.HasManyAddAssociationMixin<doacao, doacaoId>;
  addDoacaos!: Sequelize.HasManyAddAssociationsMixin<doacao, doacaoId>;
  createDoacao!: Sequelize.HasManyCreateAssociationMixin<doacao>;
  removeDoacao!: Sequelize.HasManyRemoveAssociationMixin<doacao, doacaoId>;
  removeDoacaos!: Sequelize.HasManyRemoveAssociationsMixin<doacao, doacaoId>;
  hasDoacao!: Sequelize.HasManyHasAssociationMixin<doacao, doacaoId>;
  hasDoacaos!: Sequelize.HasManyHasAssociationsMixin<doacao, doacaoId>;
  countDoacaos!: Sequelize.HasManyCountAssociationsMixin;
  // escola hasMany responsavelAluno via id_escola
  responsavel_alunos!: responsavelAluno[];
  getResponsavel_alunos!: Sequelize.HasManyGetAssociationsMixin<responsavelAluno>;
  setResponsavel_alunos!: Sequelize.HasManySetAssociationsMixin<responsavelAluno, responsavelAlunoId>;
  addResponsavel_aluno!: Sequelize.HasManyAddAssociationMixin<responsavelAluno, responsavelAlunoId>;
  addResponsavel_alunos!: Sequelize.HasManyAddAssociationsMixin<responsavelAluno, responsavelAlunoId>;
  createResponsavel_aluno!: Sequelize.HasManyCreateAssociationMixin<responsavelAluno>;
  removeResponsavel_aluno!: Sequelize.HasManyRemoveAssociationMixin<responsavelAluno, responsavelAlunoId>;
  removeResponsavel_alunos!: Sequelize.HasManyRemoveAssociationsMixin<responsavelAluno, responsavelAlunoId>;
  hasResponsavel_aluno!: Sequelize.HasManyHasAssociationMixin<responsavelAluno, responsavelAlunoId>;
  hasResponsavel_alunos!: Sequelize.HasManyHasAssociationsMixin<responsavelAluno, responsavelAlunoId>;
  countResponsavel_alunos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof escola {
    escola.init({
    id_escola: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome_escola: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    descricao_escola: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    foto_escola: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    tipo_escola: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    tipo_conta: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    agencia_conta: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    numero_conta: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    codigo_escola: {
      type: DataTypes.CHAR(64),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'escola',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_escola" },
        ]
      },
    ]
  });
  return escola;
  }
}
