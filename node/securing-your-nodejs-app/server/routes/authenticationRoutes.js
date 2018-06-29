'use strict';

// ====================
//  /api/user
// ====================

/* eslint-disable no-console */

import { Router } from 'express';
import cors from 'cors';
import { getUserModel } from '../data_access/modelFactory';
import colors from 'colors';
import Promise from 'bluebird';

const authenticationRouter = Router();

authenticationRouter
  .route('/api/user/register')
  .post(cors(), async function(req, res) {
    try {
      const User = await getUserModel();

      const { email, password, firstName, lastName } = req.body;

      const existingUser = await User.findOne({ username: email }).exec();
      if (existingUser) {
        return res
          .status(409)
          .send(`The specified email ${email} address already exists.`);
      }

      const submittedUser = {
        firstName: firstName,
        lastName: lastName,
        username: email,
        email: email,
        password: password,
        created: Date.now(),
      };

      console.log(colors.yellow('Creating New User'));
      const user = new User(submittedUser);

      await user
        .save()
        .then(function(user) {
          if (user) {
            console.log(colors.yellow(`Created User ${JSON.stringify(user)}`));
          }
        })
        .catch(function(err) {
          if (err) {
            console.log(colors.yellow(`Error occurred saving User ${err}`));
          }
        });

      res
        .status(201)
        .json({
          user: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          },
        });
    } catch (err) {
      throw err;
    }
  });

authenticationRouter
  .route('/api/user/login')
  .post(cors(), async function(req, res) {
    try {
      const User = await getUserModel();
      const { email, password } = req.body;

      const existingUser = await User.findOne({ username: email }).exec();

      if (existingUser && (await existingUser.passwordIsValid(password))) {
        const userInfo = {
          _id: existingUser._id,
          firstName: existingUser.firstName,
          lastName: existingUser.lastName,
          username: existingUser.email,
        };

        req.session.login(userInfo);

        res
          .status(200)
          .json({
            firstName: existingUser.firstName,
            lastName: existingUser.lastName,
            username: existingUser.email,
          });
      } else {
        res.status(401).send('Invalid username or password');
      }
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .send(
          'There was an error attempting to login. Please try again later.',
        );
    }
  });

authenticationRouter.route('/api/user/logout').get(cors(), function(req, res) {
  return new Promise(function(resolve, reject) {
    try {
      if (req.session) {
        req.session.destroy();
        resolve(res.sendStatus(200));
      }
    } catch (err) {
      return reject(res.sendStatus(500));
    }
  });
});

export default authenticationRouter;
