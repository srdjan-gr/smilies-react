import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from '../../../components/Message/Message';

const notifyInfo = (odgovor) => {
    toast.info(<Message info={odgovor} />);
}
const notifyError = (odgovor) => {
    toast.error(<Message error={odgovor} />)
}
const notifySuccess = (odgovor) => {
    toast.success(<Message success={odgovor} />);
}

const initialState = {
    // Ako ppstoje proizvodi u LocalStorage a stranica je osvezena na ovaj nacin ce biti ponovo ubaceni u redux stanje
    // Bez ovoga, videce se proizvodi u Local Storage posle osvezavanja ali nece postojari u Redux stanja
    cartData: localStorage.getItem('SmiliesBag') ? JSON.parse(localStorage.getItem('SmiliesBag')) : [],
    cartLoading: false,
    cartMessage: '',
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToCart(state, action) {

            const itemIndex = state.cartData.findIndex(
                (item) => item.proizvod_id === action.payload.proizvod_id
            );

            if (itemIndex < 0) {
                state.cartData.push(action.payload);
                notifySuccess(`Proizvod '${action.payload.proizvod_naziv_sr}'\n je dodat u korpu.`);
            } else if (itemIndex >= 0) {
                notifyInfo(`Proizvod '${action.payload.proizvod_naziv_sr}'\n već postoji u korpi!`);
            }

            localStorage.setItem('SmiliesBag', JSON.stringify(state.cartData));
        },
        removeFromCart(state, action) {
            const newItemsAray = state.cartData.filter(
                (item) => item.proizvod_id !== action.payload.proizvod_id
            );

            state.cartData = newItemsAray;
            localStorage.setItem('SmiliesBag', JSON.stringify(state.cartData))
        }

    },
});

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer;