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
  public preco!: number;
  public foto!: string | null;
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
    preco: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    foto: {
      type: DataTypes.STRING(),
      allowNull: false,
    },    
  },
  {
    tableName: "materiais",
    sequelize,
  }
);

export default Escola;