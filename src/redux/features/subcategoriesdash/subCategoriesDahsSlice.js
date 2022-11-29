import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import api from '../../../api/api'

export const getDashSubCategory = createAsyncThunk("DASH_SUBCATEGORIES/GET_ALL_SUBCATEGORIES", async () => {
    try {
        const { data } = await api({
            method: 'get',
            url: 'subCategoryDash.php',
        });
        return data;
    } catch (error) {
        return error.message;
    }
});

const initialState = {
    subData: [],
    subLoading: false,
    subMessage: '',

    dataUpdate: [],
}

export const subCategoryDashSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        editSubCategory(state, action) {
            state.dataUpdate = action.payload;
        },

    },
    extraReducers: {

        [getDashSubCategory.pending]: (state, action) => {
            state.subLoading = true;
        },
        [getDashSubCategory.fulfilled]: (state, action) => {
            state.subLoading = false;
            state.subData = action.payload;
        },
        [getDashSubCategory.rejected]: (state, action) => {
            state.subLoading = false;
            state.subMessage = action.payload;
        },
    },
});

// export const allData = (state) => state.categories.data;
export const { editSubCategory } = subCategoryDashSlice.actions
export default subCategoryDashSlice.reducer;