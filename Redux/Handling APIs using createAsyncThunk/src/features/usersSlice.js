import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
});

const usersSlice = createSlice({
    name:'users',
    initialState: {
        list:[],
         status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed',
         error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending , (state)=>{
            state.status = 'loading';
        })
        .addCase(fetchUsers.fulfilled , (state , action)=>{
            state.status = 'succedded';
            state.list = action.payload;
        })
        .addCase(fetchUsers.rejected , (state , action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default usersSlice.reducer;