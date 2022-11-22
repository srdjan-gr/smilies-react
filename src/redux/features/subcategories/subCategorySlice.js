import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiSubCategory = "http://localhost:8080/srdjan/smilies/sapi/api/subcategory.php";

export const getSubCategories = createAsyncThunk("subCategories/getSubCategories", async () => {
    try {
        const { data } = await axios.get(apiSubCategory);
        return data;
    } catch (error) {
        return error.subCategoryMessage;
    }
});

const initialState = {
    subData: [],
    subLoading: false,
    subMessage: '',
}

export const subCategorySlice = createSlice({
    name: 'subCategories',
    initialState,
    reducers: {},
    extraReducers: {
        [getSubCategories.pending]: (state, action) => {
            state.subLoading = true;
        },
        [getSubCategories.fulfilled]: (state, action) => {
            state.subLoading = false;
            state.subData = action.payload;
            // state.isSuccess = true;
        },
        [getSubCategories.rejected]: (state, action) => {
            state.subMessage = action.payload;
            state.subLoading = false;
            // state.isSuccess = false;
        },
    },
});

export default subCategorySlice.reducer;