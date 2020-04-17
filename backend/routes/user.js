'use strict ';
import express from 'express';
import { registerRules, validator, loginRules } from '../middlewares/validator';
import userController from '../controllers/user.Controllers';
const Router = express.Router();

Router.post('/register', registerRules(), validator, userController.register);
Router.post('/login', loginRules(), validator, userController.login);

export default Router;
