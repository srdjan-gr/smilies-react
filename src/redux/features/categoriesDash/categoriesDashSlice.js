import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiCategory = "http://localhost:8080/srdjan/sapi/api/categoryDash.php";

export const getDashCategories = createAsyncThunk("categories/getCategories", async () => {
    try {
        const { data } = await axios.get(apiCategory);
        return data;
    } catch (error) {
        return error.message;
    }
});

const initialState = {
    data: [],
    // isSuccess: false,
    loading: false,
    message: '',
}

export const categoryDashSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: {

        [getDashCategories.pending]: (state, action) => {
            state.loading = true;
        },

        [getDashCategories.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
            // state.isSuccess = true;
        },

        [getDashCategories.rejected]: (state, action) => {
            state.message = action.payload;
            state.loading = false;
            // state.isSuccess = false;
        },
    },
});

export default categoryDashSlice.reducer;