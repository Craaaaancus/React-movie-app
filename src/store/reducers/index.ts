import { configureStore, compose, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchUsers = createAsyncThunk('counter/fetch', async () => {});

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    [fetchUsers.fulfilled.type]: () => {},
  },
});
