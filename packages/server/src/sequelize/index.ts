import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import User from '../db/models/User';
import dotenv from 'dotenv';

dotenv.config();

const sequelizeOptions: SequelizeOptions = {
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT!,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialect: 'postgres',
  models: [User],
};

export const sequelize = new Sequelize(sequelizeOptions);