import { ActionTypes } from "../constants/action-types";

const initialState = {
    view: "Grid",
}

export const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_VIEW:
      return { ...state, view: action.view };
    default:
      return state;
  }
};