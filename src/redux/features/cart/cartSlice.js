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
    // Ako pstoje proizvodi u LocalStorage a stranica je osvezena na ovaj nacin ce biti ponovo ubaceni u redux stanje
    // Bez ovoga, videce se proizvodi u Local Storage posle osvezavanja ali nece postojari u Redux stanja
    cartData: localStorage.getItem('SmiliesBag') ? JSON.parse(localStorage.getItem('SmiliesBag')) : [],
    // cartLoading: false,
    // cartMessage: '',
    cartTotalPrice: '',
    cartTotalQuantity: '',
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
                notifySuccess(`Proizvod '${action.payload.proizvod_naziv_sr}'\nje dodat u korpu.`);
            } else if (itemIndex >= 0) {
                notifyInfo(`Proizvod '${action.payload.proizvod_naziv_sr}'\nveć postoji u korpi!`);
            }

            localStorage.setItem('SmiliesBag', JSON.stringify(state.cartData));
        },

        removeFromCart(state, action) {
            const newItemsAray = state.cartData.filter(
                (item) => item.proizvod_id !== action.payload.proizvod_id
            );

            state.cartData = newItemsAray;
            localStorage.setItem('SmiliesBag', JSON.stringify(state.cartData))
        },

        countTotal(state, action) {
            let { price, quantity } = state.cartData.reduce((cartTotal, cartItem) => {
                const { proizvod_cena, proizvod_kolicina } = cartItem
                const totalItemsInBag = proizvod_cena * proizvod_kolicina;

                cartTotal.price += Number(totalItemsInBag);
                cartTotal.quantity += Number(proizvod_kolicina)

                return cartTotal;
            }, {
                // Pocetno stanje za cartTotal koje posle vracamo kao CartTotal napunjeno vrednostima
                price: 0,
                quantity: 0
            })

            // Updejt stanja sa novim vrednostima za kolicinu u korpi i ukupnu cenu u korpi
            state.cartTotalPrice = price;
            state.cartTotalQuantity = quantity;
        },

    },
});

export const { addToCart, removeFromCart, countTotal } = cartSlice.actions
export default cartSlice.reducer;