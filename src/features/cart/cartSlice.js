import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: 'Meditarranean',
  //     quantity: 2,
  //     unitPrice: 17,
  //     totalPrice: 34,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    deleteItems(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId != action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0)
        cartSlice.caseReducers.deleteItems(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  deleteItems,
  clearCart,
  decreseItemQuantity,
  increaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce(
    (acc, el) => {
      return {
        totalCartQuantity: acc.totalCartQuantity + el.quantity,
        totalCartPrice: acc.totalCartPrice + el.totalPrice,
      };
    },
    { totalCartQuantity: 0, totalCartPrice: 0 },
  );

export const getCurrentQUantityById = (id) => (state) => {
  return state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
};
