import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiSubcategory = "http://localhost:8080/srdjan/smilies/sapi/api/subCategoryDash.php";
const apiUpdateSubCategory = "http://localhost:8080/srdjan/smilies/sapi/api/subcategoryGetDashUpdate.php";


export const getDashSubCategory = createAsyncThunk("DASH_SUBCATEGORIES/GET_ALL_SUBCATEGORIES", async () => {
    try {
        const { data } = await axios.get(apiSubcategory);
        return data;
    } catch (error) {
        return error.message;
    }
});


export const getUpdateDashSubCategories = createAsyncThunk("DASH_SUBCATEGORIES/GET_UPDATE", async (body) => {

    const res = await fetch(apiUpdateSubCategory, {
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
    subData: [],
    subLoading: false,
    subMessage: '',
}

export const subCategoryDashSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
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

        [getUpdateDashSubCategories.pending]: (state, action) => {
            state.subLoadingU = true;
        },
        [getUpdateDashSubCategories.fulfilled]: (state, action) => {
            state.subLoadingU = false;
            state.subDataU = action.payload;
        },
        [getUpdateDashSubCategories.rejected]: (state, action) => {
            state.subLoadingU = false;
            state.subMessageU = action.payload;
        },

    },
});

// export const allData = (state) => state.categories.data;

export default subCategoryDashSlice.reducer;