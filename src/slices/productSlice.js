import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk("fetch data", async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    return await response.json();
});
const ProductSlice = createSlice({
    name: "productSlice",
    initialState: {
        products: [],
        status:"idle",
        error:"200"
    },
    reducers: {
        loadProducts: (state, action) => {
            state.products = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.products = action.payload;
                state.status = "fullfilled";
            }).addCase(fetchData.rejected, (state, action) => {
                state.products = action.payload;
                state.status = "error";
            });
    },
});
export const { loadProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
