import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [{ title: "first" }],
};
const productSlice = createSlice({
  name: "process",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      console.log(action);
    },
    deleteItem: () => {
      state.filter();
    },
  },
});

export const { addItem, deleteItem } = productSlice.actions;
export const selectAllItem = (state) => state.product;

export default productSlice.reducer;
