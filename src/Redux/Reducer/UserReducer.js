// reducers.js

// import { ADD_USER } from "../Action/UserAction";

//import { ADD_USER } from "./actions";

const initialState = {
  users: [],
  // selectItem: null,
};

const userReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};

export default userReducer;
