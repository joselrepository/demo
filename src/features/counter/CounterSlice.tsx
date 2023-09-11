import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type Counter = {
  counter: number;
};

const initialState: Counter = {
  counter: 0,
};

// Async action using createAsyncThunk
const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    // Simulate an async operation, e.g., a network request
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // Return the new value after incrementing
    return amount;
  }
);

const decrementAsync = createAsyncThunk(
  "counter/decrementAsync",
  async (amount: number) => {
    // Simulate an async operation, e.g., a network request
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // Return the new value after decrementing
    return amount;
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.counter += action.payload;
      })
      .addCase(decrementAsync.fulfilled, (state, action) => {
        state.counter -= action.payload;
      });
  },
});

export { incrementAsync, decrementAsync };
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
