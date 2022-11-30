import React, { useState, useEffect } from 'react'
import './Bag.css'
import { IoTrashOutline, IoCloseOutline, IoAddOutline, IoRemoveOutline } from 'react-icons/io5'
import { confirm } from "react-confirm-box";

import { useDispatch, useSelector } from 'react-redux';
import { countTotal, removeFromCart } from '../../redux/features/cart/cartSlice';

import PopupOptions from '../ConfirmPopup/ConfirmPopup'

const slike = process.env.REACT_APP_BACKEND_PRODUCT_IMAGES;

const Bag = ({ bagModal, setBagModal, bag, setBag }) => {

    const cart = useSelector((state) => state.cartList);
    const dispatch = useDispatch();

    const closeBag = () => {
        setBagModal(!bagModal);
        setBag(!bag);
    }

    useEffect(() => {
        dispatch(countTotal());
    }, [dispatch]);

    const handleRemoveFromCart = async (item) => {

        const result = await confirm("Da li ste sigurni da želite da obrišete proizvod iz korpe?", PopupOptions);
        if (result) {
            dispatch(removeFromCart(item));
            dispatch(countTotal());
            return;
        }
    }

    const addQuantity = () => {

    }

    const removeQuantity = () => {

    }

    return (
        <section>
            <div className={`${bagModal ? ' bagModalActive' : ''}  bagModal`} onClick={closeBag}>    </div>
            <article className={`${bag ? 'bagActive' : ''}  bag`}>

                <div className="shopingBag__header">
                    <h2 data-en="Products in bag" data-sr="Proizvodi u korpi">Proizvodi u korpi</h2>
                    <span><IoCloseOutline onClick={closeBag} /></span>
                </div>

                <article className="shopingBag">
                    {
                        cart.cartTotalQuantity === 0 ? (

                            <div className="item__description mt-1">
                                <p data-en="Your bag iz empty." data-sr="Vaša korpa je prazna." className='text-bold'>Vaša korpa je prazna.</p>
                            </div>

                        ) : (

                            cart.cartData.map((item, idx) => {

                                // Niz sa slikama
                                let sveSlike = item.slika_ime;
                                let splitSlike = sveSlike.split(',');
                                let slika_cela = splitSlike[0];

                                return (
                                    <div className="item" key={idx}>
                                        <div className="item__image">
                                            <img src={slike + slika_cela} alt="" />
                                        </div>

                                        <div className="item__content">
                                            <span onClick={() => handleRemoveFromCart(item)} ><IoTrashOutline /></span>
                                            <label htmlFor="desc" class="desc" data-en="Item" data-sr="Odevni predmet:">Odevni predmet:</label>
                                            <div className="item__description" id="desc">
                                                <p data-en={item.proizvod_naziv_sr} data-sr={item.proizvod_naziv_sr}>{item.proizvod_naziv_sr}</p>
                                                <p data-en="Size:" data-sr="Veličina:">Veličina: {item.proizvod_velicina}</p>
                                                <p data-en={item.proizvod_boja_en} data-sr={item.proizvod_boja_sr}>Boja: {item.proizvod_boja_sr}</p>
                                                {/*<p>Code: NP2021</p>*/}
                                                <p data-en="Price:" data-sr="Cena:" className='text-bold'>Cena: {item.proizvod_cena} ,00 rsd</p>
                                            </div>

                                            <label className='mb-05' htmlFor="quant" data-en="Quantity:" data-sr="Količina:">Količina:</label>
                                            <div className="item__content-quantity">
                                                <input type="number" defaultValue='1' min="1" max="3" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }
                </article>

                {
                    cart.cartTotalQuantity === 0 ? (
                        ''
                    ) : (
                        <div className='shoping__bag-footer'>
                            <p className='text-bold' data-en="Pieces:" data-sr="Kom:">Kol: {cart.cartTotalQuantity}</p>
                            <p className='text-bold' data-en="Total:" data-sr="Ukupno:"> &#61; {cart.cartTotalPrice} ,00 rsd</p>
                        </div>
                    )
                }


                <button className="btn" data-en="Go to purchase" data-sr="Idi na plaćanje">Idi na plaćanje</button>

            </article>

        </section>
    )
}

export default Bag