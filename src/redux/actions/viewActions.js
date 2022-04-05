import { ActionTypes } from "../constants/action-types";

export const setView = (view) => {
  return {
    type: ActionTypes.SET_VIEW,
    view,
  };
};
