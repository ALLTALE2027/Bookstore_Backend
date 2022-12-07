import bookstore from '../models/books.model';

//get all notes
export const getAllBooks = async () => {
  const data = await bookstore.find();
  return data;
};

//get a note by id
export const getBook = async (_id) => {
  const data = await bookstore.findOne({ _id });
  return data;
};
