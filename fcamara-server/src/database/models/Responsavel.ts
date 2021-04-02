import { Model, DataTypes, BuildOptions, Sequelize } from 'sequelize';

const config = require('../config/config');

const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, {
    host: config.host,
    dialect: 'mysql'
  }
);


class Responsavel extends Model {
  public id!: number;
  public nome!: string;
  public sobrenome!: string;
  public telefone!: string | null;
  public email!: string;
  public escola!: string;
  public codigo!: string;
}

Responsavel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    sobrenome: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING(),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(),
      allowNull: true,
    },
    escola: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    codigo: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
  },
  {
    tableName: "responsaveis",
    sequelize,
  }
);

export default Responsavel;