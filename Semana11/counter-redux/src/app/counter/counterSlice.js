import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  //el slice va a tener la informar de una parte del estado
  name: 'counter',
  //el initialState guardará el estado inicial, es un objeto ya que de esta manera
  //podemos guardar varias propiedades
  initialState: { value: 0 },
  reducers: {
    //la idea de cada reducer es que sea una función pura, representa la lógica de c/acción
    increment: (state) => {
      state.value += 1; //state.value = state.value + 1;
    }
  }
});

//las acciones serán las que serán disparadas por los componentes
const { increment } = counterSlice.actions;

export { increment };
//el .reducer va a ser la referencia para indicar en el store
export default counterSlice.reducer; 