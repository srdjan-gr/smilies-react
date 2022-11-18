import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getProductsApi = 'http://localhost:8080/srdjan/sapi/api/productGet.php';

export const getProducts = createAsyncThunk("GET_PRODUCTS/GET_ALL_PRODUCTS", async () => {

    try {
        const { data } = await axios.get(getProductsApi);
        return data;
    } catch (error) {
        return error.message;
    }
});

const initialState = {
    data: [],
    loading: false,
    message: '',
}

export const productsSlice = createSlice({

    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [getProducts.pending]: (state, action) => {
            state.loading = true;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [getProducts.rejected]: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
    },
});

// export const allData = (state) => state.registration.data;
export default productsSlice.reducer;