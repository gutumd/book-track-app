import { combineReducers } from "redux";
import { bookReducer } from "./_bookReducer";
import { viewReducer } from "./_viewReducer";
import { searchReducer } from "./_searchReducer";
import { modalReducer } from "./_modalReducer";

export const reducers = combineReducers({
    allBooks: bookReducer,
    viewReducer,
    searchReducer,
    modalReducer,
});
