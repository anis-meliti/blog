'use strict ';
import express from 'express';
import { registerRules, validator, loginRules } from '../middlewares/validator';
import userController from '../controllers/user.Controllers';
import { isAuth } from '../../backend/middlewares/passport-setup';
const Router = express.Router();

Router.post('/register', registerRules(), validator, userController.register);
Router.post('/login', loginRules(), validator, userController.login);
Router.get('/current', isAuth(), userController.getCurrent);

export default Router;
