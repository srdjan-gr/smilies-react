import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiSubcategory = "http://localhost:8080/srdjan/sapi/api/subCategoryDash.php";
// const apiUpdateCategory = "http://localhost:8080/srdjan/sapi/api/categoryGetDashUpdate.php";


export const getDashSubCategory = createAsyncThunk("DASH_SUBCATEGORIES/GET_ALL_SUBCATEGORIES", async () => {
    try {
        const { data } = await axios.get(apiSubcategory);
        return data;
    } catch (error) {
        return error.message;
    }
});


// export const getUpdateDashCategories = createAsyncThunk("DASH_CATEGORIES/GET_UPDATE", async (body) => {

//     const res = await fetch(apiUpdateCategory, {
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
    loading: false,
    message: '',
}

export const subCategoryDashSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: {

        [getDashSubCategory.pending]: (state, action) => {
            state.loading = true;
        },
        [getDashSubCategory.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [getDashSubCategory.rejected]: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },






    },
});

// export const allData = (state) => state.categories.data;

export default subCategoryDashSlice.reducer;