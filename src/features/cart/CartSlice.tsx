import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../product/ProductSlice";
import { roundToDecimal } from "../../utils/utils";

type CartItem = Product & { quantity: number; totalPrice: number };

export type Cart = {
  items: CartItem[];
  totalPrice: number;
  isOpen: boolean;
};

const initialState: Cart = {
  items: [],
  totalPrice: 0,
  isOpen: false,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      const newItem = action.payload;
      state.items.push({ ...newItem, quantity: 1, totalPrice: newItem.price });
      state.totalPrice += newItem.price;
      state.totalPrice = roundToDecimal(state.totalPrice, 2);
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const index = state.items.findIndex((item) => item.id === id);

      state.items[index].quantity += 1;
      state.items[index].totalPrice += state.items[index].price;
      state.totalPrice += state.items[index].price;
      state.items[index].totalPrice = roundToDecimal(
        state.items[index].totalPrice,
        2
      );

      state.totalPrice = roundToDecimal(state.totalPrice, 2);
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const index = state.items.findIndex((item) => item.id === id);

      if (state.items[index].quantity <= 1) {
        state.totalPrice -= state.items[index].price;
        state.items.splice(index, 1);
      } else {
        state.items[index].quantity -= 1;
        state.items[index].totalPrice -= state.items[index].price;
        state.items[index].totalPrice = roundToDecimal(
          state.items[index].totalPrice,
          2
        );
        state.totalPrice -= state.items[index].price;
      }

      state.totalPrice = roundToDecimal(state.totalPrice, 2);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      const itemsTotalPrice = state.items[index].totalPrice;

      state.totalPrice = roundToDecimal(state.totalPrice - itemsTotalPrice, 2);
      state.items.splice(index, 1);
    },
  },
});

export const {
  toggleCart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} = CartSlice.actions;
export default CartSlice.reducer;
