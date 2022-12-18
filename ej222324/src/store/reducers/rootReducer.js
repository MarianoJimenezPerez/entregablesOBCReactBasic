import { filterReducer } from "./filterReducer";
import { todosReducer } from "./todosReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  todosState: todosReducer,
  filterState: filterReducer,
});
