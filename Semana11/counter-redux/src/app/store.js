import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

const store = configureStore({
  //reducers
  reducer: {
    //aqui indicamos los reducers que se van a almacenar
    counter: counterReducer,
  },
});

export default store;
