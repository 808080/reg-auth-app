import { Router } from 'express';
import User from '../db/models/User';

export const userRouterFactory = () =>
  Router()
    .get('/user/:id', (req, res, next) =>
      User.findByPk(req.params.id)
        .then(user => {
          if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
          }
          const { password, ...foundUser } = user.dataValues;
          return res.status(200).json({ success: true, data: foundUser });
        })
        .catch(next)
    )

    .post('/user', (req, res, next) =>
      User.create(req.body)
        .then(user => {
          const { password, ...newUser } = user.dataValues;
          res.json({ success: true, data: newUser })
        })
        .catch((error) => {
          res.status(500);
          res.json({ success: false, error });
          next();
        })
    );