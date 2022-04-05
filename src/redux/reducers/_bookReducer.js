import { ActionTypes } from "../constants/action-types";

const initialState = {
  books: [],
  bookId: 0,
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_BOOKS:
      return { ...state, books: action.payload.books };
    case ActionTypes.SET_SELECTED_BOOK:
      return { ...state, bookId: action.bookId };
    default:
      return state;
  }
};
