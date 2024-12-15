// src/features/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      state.items.push(action.payload); // Adds an item to the cart
    },
    removeItemFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload); // Removes an item by ID
    },
    updateItemQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) item.quantity = action.payload.quantity; // Updates the item quantity
    },
    resetCart() {
      return initialState;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
