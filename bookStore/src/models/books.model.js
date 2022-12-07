import { Schema, model } from 'mongoose';

const bookSchema = new Schema(
  {
    description: { type: String },
    discountPrice: { type: Number },
    bookImage: { type: String },
    bookName: { type: String },
    author: { type: String },
    price: { type: Number },
    quantity: { type: Number }
  },
  {
    timestamps: true
  }
);

export default model('bookstore', bookSchema, 'bookstore');
