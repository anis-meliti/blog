'use strict ';
import express from 'express';
import { registerRules, validator } from '../middlewares/validator';
import userController from '../controllers/user.Controllers';
const Router = express.Router();

Router.post('/register', registerRules(), validator, userController.register);
Router.post('/login', registerRules(), validator, userController.login);

export default Router;
