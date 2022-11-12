import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiCategory = "http://localhost:8080/srdjan/sapi/api/categoryDash.php";
const apiUpdateCategory = "http://localhost:8080/srdjan/sapi/api/categoryGetDashUpdate.php";
// const apiPutsUpdateCategory = "http://localhost:8080/srdjan/sapi/api/categoryDashUpdate.php";

export const getDashCategories = createAsyncThunk("DASH_CATEGORIES/GET_ALL_CATEGORIES", async () => {
    try {
        const { data } = await axios.get(apiCategory);
        return data;
    } catch (error) {
        return error.message;
    }
});


export const getUpdateDashCategories = createAsyncThunk("DASH_CATEGORIES/GET_UPDATE", async (body) => {

    const res = await fetch(apiUpdateCategory, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    return await res.json();
});


// export const putUpdateDashCategories = createAsyncThunk("DASH_CATEGORIES/SEND_UPDATE", async (body) => {

//     const res = await fetch(apiPutsUpdateCategory, {
//         method: 'post',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//     })
//     return await res.json();
// });



const initialState = {
    data: [],
    // isSuccess: false,
    loading: false,
    message: '',

    // dataUpdated: [],
    // loadingUpdated: false,
    // messageUpdated: '',
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
        },


        [getUpdateDashCategories.pending]: (state, action) => {
            state.loadingUpdate = true;
        },
        [getUpdateDashCategories.fulfilled]: (state, action) => {
            state.loadingUpdate = false;
            state.dataUpdate = action.payload;
        },
        [getUpdateDashCategories.rejected]: (state, action) => {
            state.loadingUpdate = false;
            state.messageUpdate = action.payload;
        },


        // [putUpdateDashCategories.pending]: (state, action) => {
        //     state.loadingUpdated = true;
        // },
        // [putUpdateDashCategories.fulfilled]: (state, action) => {
        //     state.loadingUpdated = false;
        //     state.dataUpdated = action.payload;
        // },
        // [putUpdateDashCategories.rejected]: (state, action) => {
        //     state.loadingUpdated = false;
        //     state.messageUpdated = action.payload;
        // },




    },
});

// export const allData = (state) => state.categories.data;

export default categoryDashSlice.reducer;