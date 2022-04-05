import { ActionTypes } from "../constants/action-types";

const initialState = {
    isOpen: false,
}

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_IS_OPEN:
      return { ...state, isOpen: action.isOpen };
    default:
      return state;
  }
};