const Sequelize = require('sequelize');

const config = require(__dirname + '/../config/config.json');

const sequelize = new Sequelize(config.database, config.username, config.password, config);

export default sequelize;
