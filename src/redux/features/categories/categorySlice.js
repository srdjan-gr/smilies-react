import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import api from '../../../api/api'

export const getCategories = createAsyncThunk("CATEGORIES/GET_CATEGORIES", async () => {
    try {
        const { data } = await api({
            method: 'get',
            url: 'category.php?fun=read&lokacija=front',
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
}

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: {
        // 3 akcije u reduceru
        // 1. Poslali smo request, cekamo podatke(pending) - loading(ucitavanje podataka) = true
        [getCategories.pending]: (state, action) => {
            state.loading = true;
        },
        // 2. Fulfielld - znaci da smo dobili podatke i napunili stanje. Loading = false (ucitavanje zavrseno). stanje.categories(stanje) napunjeno podacima
        [getCategories.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
            // state.isSuccess = true;
        },
        // 3. Akcija za Error hendlovanje: 
        [getCategories.rejected]: (state, action) => {
            state.message = action.payload;
            state.loading = false;
            // state.isSuccess = false;
        },
    },
});

export default categorySlice.reducer;