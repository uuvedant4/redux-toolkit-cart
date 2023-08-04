import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const GET_PRODUCTS_API = "https://fakestoreapi.com/products";

const initialState = {
  data: [],
  status: "idle",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsAsync.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(getProductsAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProductsAsync.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export const getProductsAsync = createAsyncThunk("products/get", async () => {
  const response = await fetch(GET_PRODUCTS_API);
  const data = await response.json();
  return data;
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;
