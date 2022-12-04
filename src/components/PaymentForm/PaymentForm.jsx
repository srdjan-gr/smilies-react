import React from 'react'
import { Link } from 'react-router-dom';
import { IoTrashOutline } from 'react-icons/io5'
import PopupOptions from '../ConfirmPopup/ConfirmPopup'
import { confirm } from "react-confirm-box";

import { useDispatch, useSelector } from 'react-redux';
import { countTotal, removeFromCart } from '../../redux/features/cart/cartSlice';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
const slike = process.env.REACT_APP_BACKEND_PRODUCT_IMAGES;

const PaymentForm = () => {

    const cart = useSelector((state) => state.cartList);
    const dispatch = useDispatch();

    const handleRemoveFromCart = async (item) => {

        const result = await confirm("Želite da obrišete ovaj proizvod iz korpe?", PopupOptions);
        if (result) {
            dispatch(removeFromCart(item));
            dispatch(countTotal());
            return;
        }
    }

    const handlePaymentSubmit = () => {

    }

    if (cart.cartTotalQuantity != 0) {
        return (

            <form onSubmit={handlePaymentSubmit}>

                <article className='payment__container'>
                    <h1 className='color-danger'>Svi podaci su obavezni</h1>

                    <div className='payment'>
                        <section className='payment__section payment-border p-1'>
                            <h2>Podaci o kupcu</h2>
                            <div className='user__data inputs'>
                                <label htmlFor="" data-en='Name' data-sr='Ime'>Ime</label>
                                <input type="text" />

                                <label htmlFor="" data-en='Name' data-sr='Prezime'>Prezime</label>
                                <input type="text" />

                                <label htmlFor="" data-en='Name' data-sr='Ulica i broj'>Ulica i broj</label>
                                <input type="text" />

                                <label htmlFor="" data-en='Name' data-sr='Država'>Država</label>
                                <input type="text" />

                                <label htmlFor="" data-en='Name' data-sr='Grad'>Grad</label>
                                <input type="text" />

                                <label htmlFor="" data-en='Name' data-sr='Poštanski broj'>Poštanski broj</label>
                                <input type="text" />

                                <label htmlFor="" data-en='Name' data-sr='Broj telefona'>Broj telefona</label>
                                <input type="text" />

                            </div>
                        </section>

                        <section className='payment__section'>

                            <div className='payment-border mb-2 p-1'>
                                <h2>Način preuzimanja</h2>
                                <div className='user__data'>
                                    <div className='radion__container'>
                                        <input type="radio" checked disabled />
                                        <label htmlFor="" data-en='Name' data-sr='Kurirska služba - Dostava na adresu'>Kurirska služba - Dostava na adresu</label>
                                    </div>
                                </div>
                            </div>

                            <div className='payment-border mb-2 p-1'>
                                <h2>Način plaćanja</h2>
                                <div className='user__data' id='paymentType'>

                                    <div className='radion__container mb-1'>
                                        <input type="radio" name='paymentType' checked />
                                        <label htmlFor="" data-en='Name' data-sr='Pouzećem / Plaćanje gotovinom'>Pouzećem / Plaćanje gotovinom</label>
                                    </div>

                                    <div className='radion__container'>
                                        <input type="radio" name='paymentType' />
                                        <label htmlFor="" data-en='Name' data-sr='Platna kartica'>Platna kartica</label>
                                    </div>

                                </div>
                            </div>

                            <div className='payment-border mb-2 p-1'>
                                <h2>Detalji porudžbine</h2>
                                <div className='user__data'>

                                    {
                                        cart.cartData.map((item, idx) => {
                                            // Niz sa slikama
                                            let sveSlike = item.slika_ime;
                                            let splitSlike = sveSlike.split(',');
                                            let slika_cela = splitSlike[0];

                                            return (
                                                <article className='order__single-product'>
                                                    <div className='order__details'>
                                                        <p data-en={item.proizvod_naziv_sr} data-sr={item.proizvod_naziv_sr}>{item.proizvod_naziv_sr}</p>
                                                        <p data-en="Size:" data-sr="Veličina:">Veličina: {item.proizvod_velicina}</p>
                                                        <p data-en={item.proizvod_boja_en} data-sr={item.proizvod_boja_sr}>Boja: {item.proizvod_boja_sr}</p>
                                                        {/*<p>Code: NP2021</p>*/}
                                                        <p data-en="Price:" data-sr="Cena:" className='text-bold'>Cena: {item.proizvod_cena} ,00 rsd</p>
                                                    </div>
                                                    <div className="order__image">
                                                        <img src={slike + slika_cela} alt="" />
                                                        <span onClick={() => handleRemoveFromCart(item)} ><IoTrashOutline className='icon-main ml-3' /></span>
                                                    </div>
                                                </article>
                                            )
                                        })
                                    }

                                    <div className='order__price'>
                                        <h3>Ukupno za plaćanje (cena sa PDV-om) </h3>
                                        <h3> {cart.cartTotalPrice} ,00 rsd</h3>
                                    </div>

                                    <div className='button__order'>
                                        <Link to="/payment" className="btn btn-with-100">Poruči</Link>
                                    </div>
                                </div>
                            </div>


                        </section>

                    </div>
                </article>
            </form>
        )

    } else {
        return (
            <ErrorPage empyBag />
        )
    }
}

export default PaymentForm