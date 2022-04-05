import { ActionTypes } from "../constants/action-types";

export const setFilteredBooks = (searchTerm) => {
    return {
      type: ActionTypes.SET_FILTERED_BOOKS,
      searchTerm,
    };
  };
  