import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from '../../../api/api'

export const getDashOrders = createAsyncThunk("DASH_ORDERS/GET_ALL_ORDERS", async () => {
    try {
        const { data } = await api({
            method: 'get',
            url: 'order.php?fun=read',
        });
        return data;
    } catch (error) {
        return error.message;
    }
});

const initialState = {
    ordersData: [],
    ordersLoading: false,
    ordersMessage: '',

    dataUpdate: [],
}

export const ordersDashSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: {

        [getDashOrders.pending]: (state, action) => {
            state.ordersLoading = true;
        },
        [getDashOrders.fulfilled]: (state, action) => {
            state.ordersLoading = false;
            state.ordersData = action.payload;
        },
        [getDashOrders.rejected]: (state, action) => {
            state.ordersLoading = false;
            state.ordersMessage = action.payload;
        },
    },
});

export const { editOrder, viewOrder } = ordersDashSlice.actions
export default ordersDashSlice.reducer;