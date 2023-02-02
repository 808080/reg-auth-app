import { Router } from 'express';
import User from '../db/models/User';

export const authRouterFactory = () =>
  Router()
    .post('/login', (req, res, next) =>
      User.findOne({ where: { email: req.body.email, password: req.body.password } })
        .then((user) => {
          if (!user) {
            return res.status(404).json({ success: false, error: 'Invalid e-mail or password' });
          }
          const { password, ...loggedUser } = user.dataValues;
          return res.status(200).json({ success: true, data: loggedUser })
        })
    )

    .post('/logout', (req, res, next) =>
      User.findOne({ where: { email: req.body.email, id: req.body.id } })
        .then((user) => {
          if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
          }
          return res.status(200).json({ success: true, data: null })
        })
    );