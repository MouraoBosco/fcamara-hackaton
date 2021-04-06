import express from 'express';
import cors from 'cors';
import routes from './routes';
import sequelize from './database';

import './database';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  sequelize.authenticate().then(async() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

});

