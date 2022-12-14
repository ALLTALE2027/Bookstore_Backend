import express from 'express';
import * as userController from '../controllers/user.controller';
import {
  registerUserValidator,
  loginValidator
} from '../validators/user.validator';

const router = express.Router();

//route to create a new user
router.post('', registerUserValidator, userController.registerUser);

//route to login user
router.post('/login', loginValidator, userController.login);

export default router;
