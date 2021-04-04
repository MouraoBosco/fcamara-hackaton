import { Sequelize } from 'sequelize';
import { initModels } from './models/init-models';
const config = require('./config/config'); 

const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
  }
);


export default sequelize;
