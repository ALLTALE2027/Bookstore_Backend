import express from 'express';
import * as booksController from '../controllers/books.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to get all books
router.get('', userAuth, booksController.getAllBooks);

//route to get a book
router.get('/:_id', userAuth, booksController.getBook);

export default router;
