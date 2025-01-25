import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import usersReducer from "./users/usersSlice"

const store = configureStore({
  //reducers
  reducer: {
    //aqui indicamos los reducers que se van a almacenar
    counter: counterReducer,
    users: usersReducer
  },
});

export default store;
