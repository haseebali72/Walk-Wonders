import { createSlice } from "@reduxjs/toolkit";

const itemCountSlice = createSlice({
  name: "itemCount",
  initialState: {},
  reducers: {
    incrementItem: (state, action) => {
      const { itemId } = action.payload;
      state[itemId] = ((state[itemId] || 0) + 1);
    },
    decrementItem: (state, action) => {
      const { itemId } = action.payload;
      if (state[itemId] && state[itemId] > 1) {
        state[itemId] -= 1;
      }
    },
  },
});

export const { incrementItem, decrementItem } = itemCountSlice.actions;
export default itemCountSlice.reducer;
