import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import userReducer from "../Reducer/UserReducer";
const rootReducer = combineReducers({
  items: userReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
