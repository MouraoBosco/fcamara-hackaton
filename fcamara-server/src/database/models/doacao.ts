import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { doador, doadorId } from './doador';
import type { escola, escolaId } from './escola';

export interface doacaoAttributes {
  id_doacao: number;
  data_doacao: string;
  valor_doacao: string;
  id_doador: number;
  id_escola: number;
}

export type doacaoPk = "id_doacao";
export type doacaoId = doacao[doacaoPk];
export type doacaoCreationAttributes = Optional<doacaoAttributes, doacaoPk>;

export class doacao extends Model<doacaoAttributes, doacaoCreationAttributes> implements doacaoAttributes {
  id_doacao!: number;
  data_doacao!: string;
  valor_doacao!: string;
  id_doador!: number;
  id_escola!: number;

  // doacao belongsTo doador via id_doador
  id_doador_doador!: doador;
  getId_doador_doador!: Sequelize.BelongsToGetAssociationMixin<doador>;
  setId_doador_doador!: Sequelize.BelongsToSetAssociationMixin<doador, doadorId>;
  createId_doador_doador!: Sequelize.BelongsToCreateAssociationMixin<doador>;
  // doacao belongsTo escola via id_escola
  id_escola_escola!: escola;
  getId_escola_escola!: Sequelize.BelongsToGetAssociationMixin<escola>;
  setId_escola_escola!: Sequelize.BelongsToSetAssociationMixin<escola, escolaId>;
  createId_escola_escola!: Sequelize.BelongsToCreateAssociationMixin<escola>;

  static initModel(sequelize: Sequelize.Sequelize): typeof doacao {
    doacao.init({
    id_doacao: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    data_doacao: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    valor_doacao: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    id_doador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'doador',
        key: 'id_doador'
      }
    },
    id_escola: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'escola',
        key: 'id_escola'
      }
    }
  }, {
    sequelize,
    tableName: 'doacao',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_doacao" },
        ]
      },
      {
        name: "id_doador",
        using: "BTREE",
        fields: [
          { name: "id_doador" },
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
  return doacao;
  }
}
