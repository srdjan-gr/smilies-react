import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import api from '../../../api/api'

export const getDashCategories = createAsyncThunk("DASH_CATEGORIES/GET_ALL_CATEGORIES", async () => {
    try {
        const { data } = await api({
            method: 'get',
            url: 'categoryDash.php',
        });
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

    dataUpdate: [],
}

export const categoryDashSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        editCategory(state, action) {
            state.dataUpdate = action.payload;
        },

    },
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
        },

    },
});

export const { editCategory } = categoryDashSlice.actions
export default categoryDashSlice.reducer;