import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
    isLoading: false,
    isError: false
}

export const fetchCategory = createAsyncThunk('fetchCategory', async () => {
    const response = await fetch("https://ecommerce-backend-fawn-eight.vercel.app/api/categories");
    const data = await response.json();
    return data;
})

export const CategorySlice = createSlice({
    name: 'category',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCategory.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            state.isLoading = false
            state.value = action.payload
        })
        builder.addCase(fetchCategory.rejected, (state) => {
            state.isLoading = false
            state.isError = true
        })
    }
})

export default CategorySlice.reducer;