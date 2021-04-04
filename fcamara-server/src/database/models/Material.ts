import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { listaMaterial, listaMaterialId } from './lista_material';

export interface materialAttributes {
  id_material: number;
  nome_material: string;
  preco_material: string;
  imagem_material: any;
}

export type materialPk = "id_material";
export type materialId = material[materialPk];
export type materialCreationAttributes = Optional<materialAttributes, materialPk>;

export class material extends Model<materialAttributes, materialCreationAttributes> implements materialAttributes {
  id_material!: number;
  nome_material!: string;
  preco_material!: string;
  imagem_material!: any;

  // material hasMany listaMaterial via id_material
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
 
  static initModel(sequelize: Sequelize.Sequelize): typeof material {
    material.init({
    id_material: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome_material: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    preco_material: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    imagem_material: {
      type: DataTypes.BLOB,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'material',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_material" },
        ]
      },
    ]
  });
  return material;
  }
}
