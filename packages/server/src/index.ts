import { createServer } from 'http';
import app from './app';
import { sequelize } from './sequelize';

const port = process.env.PORT || 3000;

sequelize
  .authenticate()
  .then(() => {
    createServer(app).listen(port, () =>
      console.log(`Server listen on port ${port}`)
    );
  })
  .catch(console.log);