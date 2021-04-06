import { Sequelize } from 'sequelize';
import { initModels } from './models/init-models';
const config = require('./config/config'); 

const env = process.env.NODE_ENV;
let sequelize;

if (env == 'production') {
  console.log('production');
  sequelize = new Sequelize(
    config.production.database, 
    config.production.username, 
    config.production.password, {
      host: config.production.host,
      dialect: 'mysql',
        pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    }
  );
} else {
  sequelize = new Sequelize(
    config.development.database, 
    config.development.username, 
    config.development.password, {
      host: config.development.host,
      dialect: 'mysql',
        pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    }
  );
}


export default sequelize;
