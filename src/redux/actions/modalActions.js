import { ActionTypes } from "../constants/action-types";

export const setIsOpen = (isOpen) => {
  return {
    type: ActionTypes.SET_IS_OPEN,
    isOpen,
  };
};
