import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sleep } from "../../utils/utils";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    counter: number;
  };
};
type HttpStatus = "idle" | "loading" | "success" | "failed";

export type Filter =
  | "mens"
  | "womens"
  | "electronics"
  | "shirt"
  | "jewelry"
  | "none";

type DataState = {
  products: Product[] | null;
  status: HttpStatus;
  error: string | undefined;
  filter: Filter;
};

const initialState: DataState = {
  products: null,
  status: "idle",
  error: undefined,
  filter: "none",
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    // await sleep(5000);
    const res = await fetch("http://localhost:3000/products");
    const { products } = (await res.json()) as { products: Product[] };

    return products;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const { setFilter } = productSlice.actions;
export default productSlice.reducer;
