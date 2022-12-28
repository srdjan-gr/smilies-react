import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import api from '../../../api/api'

export const getSubCategories = createAsyncThunk("SUBCATEGORIES/GET_SUBCATEGORIES", async () => {
    try {
        const { data } = await api({
            method: 'get',
            url: 'subcategory.php?fun=read&lokacija=front',
        });
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