import { Schema, model, Mongoose } from 'mongoose';

const cartSchema = new Schema({
  userID: {
    type: String
  },
  books: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: 'bookstore'
      },
      description: {
        type: String
      },
      bookName: {
        type: String
      },
      bookImage: {
        type: String
      },
      author: {
        type: String
      },
      quantity: {
        type: Number,
        default: 1
      },
      price: {
        type: Number
      }
    }
  ],

  cart_total: {
    type: Number
  },
  isPurchased: {
    type: Boolean,
    default: false
  }
});

export default model('Cart', cartSchema);
