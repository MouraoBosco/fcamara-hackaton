import { Sequelize } from 'sequelize';

const config = require('./config/config'); 

const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, {
    host: config.host,
    dialect: 'mysql'
  }
);


export default sequelize;
