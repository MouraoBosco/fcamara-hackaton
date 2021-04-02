import { Model, DataTypes, Sequelize } from 'sequelize';

const config = require('../config/config');

const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, {
    host: config.host,
    dialect: 'mysql'
  }
);


class Escola extends Model {
  public id!: number;
  public nome!: string;
  public descricao!: string;
  public endereco!: string;
  public telefone!: string;
  public foto!: string | null;
  public codigo!: string;
}

Escola.init(
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
    descricao: {
      type: DataTypes.TEXT(),
      allowNull: false,
    },
    foto: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    codigo: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
  },
  {
    tableName: "escolas",
    sequelize,
  }
);

export default Escola;