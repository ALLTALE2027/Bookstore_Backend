import bookstore from '../models/books.model';
import Cart from '../models/cart.model';

//create cart
export const createCart = async (body, book_id) => {
  const data = await bookstore.findOne({ _id: book_id });
  if (data !== null) {
    const cart = await Cart.findOne({ userID: body.userID });
    //if cart does not exists ,create it
    if (cart === null) {
      let book = [];
      data.quantity = 1;
      book.push(data);
      body.books = book;

      const cartCreated = await Cart.create({
        userID: body.userID,
        books: body.books,
        cart_total: data.price
      });
      return cartCreated;
    }
    //if cart exists
    else {
      const existingBook = cart.books.find(
        (book) => book._id.toString() === data._id.toString()
      );

      console.log('existing', existingBook);
      //if book already exists in cart
      if (existingBook) {
        cart.books.map((book) => {
          if (book._id.toString() === existingBook._id.toString()) {
            book.quantity += 1;
          }
        });
        cart.cart_total += existingBook.price;
        cart.save();
        return cart;
      }
      //if book is not already in cart
      else {
        data.quantity = 1;
        cart.books.push(data);
        cart.cart_total += data.price;
        cart.save();
        return cart;
      }
    }
  } else {
    throw new Error('book is not there ,wrong id');
  }
};

//remove from cart
export const removeFromCart = async (body, book_id) => {
  const cart = await Cart.findOne({ userID: body.userID });

  if (cart !== null) {
    const ifBookPresent = cart.books.find(
      (book) => book._id.toString() === book_id.toString()
    );

    console.log(' remove book if existing', ifBookPresent);
    //if book is present in cart
    if (ifBookPresent) {
      cart.books.map((book) => {
        if (book._id.toString() === ifBookPresent._id.toString()) {
          book.quantity -= 1;

          if (book.quantity == 0) {
            // let index = cart.books.indexOf(book);
            // cart.books.splice(index, 1);
            cart.books.remove(book);
          }
        }
      });
      cart.cart_total -= ifBookPresent.price;
      cart.save();
      return cart;
    } else {
      throw new Error(
        'book is not in cart, it seems there was some issue while adding book'
      );
    }
  } else {
    throw new Error('cart is not created for you, there was some issue');
  }
};
