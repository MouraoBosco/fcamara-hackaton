import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { material, materialId } from './material';
import type { responsavelAluno, responsavelAlunoId } from './responsavel_aluno';

export interface listaMaterialAttributes {
  id_lista_material: number;
  id_material: number;
  qtd_material: number;
  id_responsavel: number;
}

export type listaMaterialPk = "id_lista_material";
export type listaMaterialId = listaMaterial[listaMaterialPk];
export type listaMaterialCreationAttributes = Optional<listaMaterialAttributes, listaMaterialPk>;

export class listaMaterial extends Model<listaMaterialAttributes, listaMaterialCreationAttributes> implements listaMaterialAttributes {
  id_lista_material!: number;
  id_material!: number;
  qtd_material!: number;
  id_responsavel!: number;

  // listaMaterial belongsTo material via id_material
  id_material_material!: material;
  getId_material_material!: Sequelize.BelongsToGetAssociationMixin<material>;
  setId_material_material!: Sequelize.BelongsToSetAssociationMixin<material, materialId>;
  createId_material_material!: Sequelize.BelongsToCreateAssociationMixin<material>;
  // listaMaterial belongsTo responsavelAluno via id_responsavel
  id_responsavel_responsavel_aluno!: responsavelAluno;
  getId_responsavel_responsavel_aluno!: Sequelize.BelongsToGetAssociationMixin<responsavelAluno>;
  setId_responsavel_responsavel_aluno!: Sequelize.BelongsToSetAssociationMixin<responsavelAluno, responsavelAlunoId>;
  createId_responsavel_responsavel_aluno!: Sequelize.BelongsToCreateAssociationMixin<responsavelAluno>;

  static initModel(sequelize: Sequelize.Sequelize): typeof listaMaterial {
    listaMaterial.init({
    id_lista_material: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_material: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'material',
        key: 'id_material'
      }
    },
    qtd_material: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_responsavel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'responsavel_aluno',
        key: 'id_responsavel'
      }
    }
  }, {
    sequelize,
    tableName: 'lista_material',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_lista_material" },
        ]
      },
      {
        name: "id_material",
        using: "BTREE",
        fields: [
          { name: "id_material" },
        ]
      },
      {
        name: "id_responsavel",
        using: "BTREE",
        fields: [
          { name: "id_responsavel" },
        ]
      },
    ]
  });
  return listaMaterial;
  }
}
