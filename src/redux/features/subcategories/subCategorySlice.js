import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiSubCategory = "http://localhost:8080/srdjan/sapi/smilies/api/subcategory.php";

export const getSubCategories = createAsyncThunk("subCategories/getSubCategories", async () => {
    try {
        const { data } = await axios.get(apiSubCategory);
        return data;
    } catch (error) {
        return error.subCategoryMessage;
    }
});

const initialState = {
    data: [],
    // isSuccess: false,
    loading: false,
    message: '',
}

export const subCategorySlice = createSlice({
    name: 'subCategories',
    initialState,
    reducers: {},
    extraReducers: {
        [getSubCategories.pending]: (state, action) => {
            state.loading = true;
        },
        [getSubCategories.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
            // state.isSuccess = true;
        },
        [getSubCategories.rejected]: (state, action) => {
            state.message = action.payload;
            state.loading = false;
            // state.isSuccess = false;
        },
    },
});

export default subCategorySlice.reducer;