import HttpStatus from 'http-status-codes';
import * as CartService from '../services/cart.service';

/**
 * Controller to get the cart
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getCartDetails = async (req, res, next) => {
  try {
    const data = await CartService.getCartDetails();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All books fetched successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};
/**
 * Controller to create and add to  a cart
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const createCart = async (req, res, next) => {
  try {
    const data = await CartService.createCart(req.body, req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'book added to cart successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};

/**
 * Controller to remove from cart
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const removeFromCart = async (req, res, next) => {
  try {
    const data = await CartService.removeFromCart(req.body, req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'book added to cart successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};
