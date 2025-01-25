import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/*
const fetchUsers = async () => {
  try {
    const response =  await fetch("https://reqres.in/api/users?page=2");
    return response.json();
  } catch (error) {
    
  }
}
*/

const fetchUsers = createAsyncThunk('users/getUsers', 
  // async (url , thunkAPI) => {
  async (_ , thunkAPI) => {
    try {
      const response =  await fetch("https://reqres.in/api/users?page=2");
      return response.json();
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    listUsers: [],
    loading: 'idle',
    error: null
  },
  reducers: {},
  //es la referencia al createSlice
  extraReducers: (builder) => {
    builder
    //es como añadir artificialmente acciones
    .addCase(fetchUsers.pending, (state) => {
      state.loading = "loading"
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      console.log("fulfilled", action)
      state.loading = "success",
      state.listUsers = [...action.payload.data]
    })
    .addCase(fetchUsers.rejected, (state, action) => {
      state.loading = "failed",
      state.error =  action.error
    })
  }
})

export { fetchUsers }

export default usersSlice.reducer;