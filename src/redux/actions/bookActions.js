import { ActionTypes } from "../constants/action-types";

export const setBooks = (books) => {
  return {
    type: ActionTypes.SET_BOOKS,
    payload: books,
  };
};

export const setSelectedBook = (bookId) => {
  return {
    type: ActionTypes.SET_SELECTED_BOOK,
    bookId,
  };
};
