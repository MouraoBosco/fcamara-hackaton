import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { doacao, doacaoId } from './doacao';

export interface doadorAttributes {
  id_doador: number;
  hash_doador: string;
}

export type doadorPk = "id_doador";
export type doadorId = doador[doadorPk];
export type doadorCreationAttributes = Optional<doadorAttributes, doadorPk>;

export class doador extends Model<doadorAttributes, doadorCreationAttributes> implements doadorAttributes {
  id_doador!: number;
  hash_doador!: string;

  // doador hasMany doacao via id_doador
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

  static initModel(sequelize: Sequelize.Sequelize): typeof doador {
    doador.init({
    id_doador: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    hash_doador: {
      type: DataTypes.CHAR(64),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'doador',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_doador" },
        ]
      },
    ]
  });
  return doador;
  }
}
