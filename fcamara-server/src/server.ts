import express from 'express';
import cors from 'cors';
import routes from './routes';
import sequelize from './database';
import Responsavel from './database/models/Responsavel';

require('./database');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  sequelize.authenticate().then(async() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

});

