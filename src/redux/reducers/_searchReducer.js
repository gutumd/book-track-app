import { ActionTypes } from "../constants/action-types";

const initialState = {
  searchTerm: '',
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_FILTERED_BOOKS:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    default:
      return state;
  }
};
