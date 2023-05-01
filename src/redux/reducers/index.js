import { combineReducers } from "redux";
import userReducer from "./userReducer";
import articlesReducer from "./articlesReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  articleState: articlesReducer,
});

export default rootReducer;
