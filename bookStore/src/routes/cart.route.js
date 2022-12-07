import express from 'express';
import * as cartController from '../controllers/cart.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to get cart details for a user
router.get('', userAuth, cartController.getCartDetails);

//route to create cart
router.post('/add/:_id', userAuth, cartController.createCart);

//route to removde from cart
router.post('/remove/:_id', userAuth, cartController.removeFromCart);

export default router;
