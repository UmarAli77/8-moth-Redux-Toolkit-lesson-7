import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
    isLoading: false,
    isError: false
}

export const fetchProduct = createAsyncThunk('fetchProduct', async () => {
    const response = await fetch("https://ecommerce-backend-fawn-eight.vercel.app/api/products");
    const data = await response.json();
    return data;
})

export const ProductSlice = createSlice({
    name: 'product',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.isLoading = false
            state.value = action.payload
        })
        builder.addCase(fetchProduct.rejected, (state) => {
            state.isLoading = false
            state.isError = true
        })
    }
})

export default ProductSlice.reducer;