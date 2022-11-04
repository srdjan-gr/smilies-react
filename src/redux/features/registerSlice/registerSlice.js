import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiRegisterUser = 'http://localhost:8080/srdjan/sapi/api/signup.php';

export const registerUser = createAsyncThunk("registerUser/setRegisterUser", async (body) => {

    const res = await fetch(apiRegisterUser, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    return await res.json();
});

const initialState = {
    data: {},
    loading: false,
    error: null,
}

export const registerSlice = createSlice({

    name: 'registration',
    initialState,
    reducers: {},
    extraReducers: {
        [registerUser.pending]: (state, action) => {
            state.loading = true;
        },
        [registerUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [registerUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const allData = (state) => state.registration.data;
export default registerSlice.reducer;