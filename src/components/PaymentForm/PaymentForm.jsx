import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';

import { useDispatch, useSelector } from 'react-redux';
import { countTotal, removeFromCart } from '../../redux/features/cart/cartSlice';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

import { IoTrashOutline } from 'react-icons/io5'
import PopupOptions from '../ConfirmPopup/ConfirmPopup'
import { confirm } from "react-confirm-box";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from '../Message/Message';

import api from '../../api/api';
import { useEffect } from 'react';
import { current } from '@reduxjs/toolkit';
const slike = process.env.REACT_APP_BACKEND_PRODUCT_IMAGES;

const PaymentForm = () => {

    const cart = useSelector((state) => state.cartList);
    const dispatch = useDispatch();
    // Session
    const smiliesSession = sessionStorage.getItem("SmiliesOnlineLog");
    const navigate = useNavigate();


    const [ime, setIme] = useState('');
    const [prezime, setPrezime] = useState('');
    const [email, setEmail] = useState('');
    const [ulica, setUlica] = useState('');
    const [brojUlaza, setBrojUlaza] = useState('');
    const [brojStana, setBrojStana] = useState('');
    const [drzava, setDrzava] = useState('');
    const [grad, setGrad] = useState('');
    const [postanskiBroj, setPostanskiBroj] = useState('');
    const [brojTelefona, setBrojTelefona] = useState('');
    const [preuzimanje, setPreuzimanje] = useState('dostava');
    const [placanje, setPlacanje] = useState('pouzece');
    
    const [proizvodi, setProizvodi] = useState([]);



    const handleRemoveFromCart = async (item) => {
        const result = await confirm("Želite da obrišete ovaj proizvod iz korpe?", PopupOptions);
        if (result) {
            dispatch(removeFromCart(item));
            dispatch(countTotal());
            obrisiProizvod(item.proizvod_id)
            return;
        }
    }
    
    const handlePaymentSubmit = (e) => {
        
        e.preventDefault();
        
        if (smiliesSession) {
            const token = jwt(smiliesSession);

            const sendData = {
                ime: token.data.name,
                prezime: token.data.last_name,
                email: token.data.email,
                ulica: ulica,
                brojUlaza: brojUlaza,
                brojStana: brojStana,
                drzava: drzava,
                grad: grad,
                postanskiBroj: postanskiBroj,
                brojTelefona: brojTelefona,
                preuzimanje: preuzimanje,
                placanje: placanje,
                proizvodi: proizvodi,
            }

            api({
                method: 'post',
                url: 'orderAdd.php',
                data: sendData,
            })
                .then((response) => {
                    if (response.data.uspesno) {
                        notifySuccess(response.data.uspesno);
                        navigate('/')
                    } else if (response.data.greska) {
                        notifyError(response.data.greska);
                    } else if (response.data.info) {
                        notifyInfo(response.data.info);
                    }
                })
        } else {

            const sendData = {
                ime: ime,
                prezime: prezime,
                email: email,
                ulica: ulica,
                brojUlaza: brojUlaza,
                brojStana: brojStana,
                drzava: drzava,
                grad: grad,
                postanskiBroj: postanskiBroj,
                brojTelefona: brojTelefona,
                preuzimanje: preuzimanje,
                placanje: placanje,
                proizvodi: proizvodi
            }

            api({
                method: 'post',
                url: 'orderAdd.php',
                data: sendData,
            })
                .then((response) => {
                    if (response.data.uspesno) {
                        notifySuccess(response.data.uspesno);
                        navigate('/')
                    } else if (response.data.greska) {
                        notifyError(response.data.greska);
                    } else if (response.data.info) {
                        notifyInfo(response.data.info);
                    }
                })
                //  Brisanje sdvih polja , redirekcija na neku stranu ako je uspesna porudzbina
        }
    }


    const obrisiProizvod = (idd) => {

        let n = proizvodi.filter((item) => {
            return item !== idd
        })

        setProizvodi([])
        setProizvodi(n)
    }

    const dodajProizvod = (id) => {
        setProizvodi(current => [...current, id]);
    }


    // Message je stilizovana komponenta Unutar Toast-a
    const notifyError = (odgovor) => {
        toast.error(<Message error={odgovor} />)
    }
    const notifySuccess = (odgovor) => {
        toast.success(<Message success={odgovor} />);
    }
    const notifyInfo = (odgovor) => {
        toast.info(<Message info={odgovor} />);
    }



    if (cart.cartTotalQuantity != 0) {
        return (

            <form onSubmit={handlePaymentSubmit}>

                <article className='payment__container'>
                    <h1 className='color-danger'>Svi podaci su obavezni</h1>

                    <div className='payment'>

                        {
                            smiliesSession ? (
                                
                                <section className='payment__section'>
                                    <div className='payment-border mb-2 p-2'>
                                        <h2>Ostali podaci za Prijavljenog korisnika</h2>
                                        <div className='user__data'>

                                            <div className='payment__street'>
                                                <div className='payment__street-single'>
                                                    <label htmlFor="" data-en='Street' data-sr='Ulica'>Ulica</label>
                                                    <input type="text" name='ulica' value={ulica} onChange={(e) => setUlica(e.target.value)} />
                                                </div>
                                                <div className='payment__street-single'>
                                                    <label htmlFor="" data-en='Street' data-sr='Broj ulaza'>Broj ulaza</label>
                                                    <input type="text" name='brojUlaza' value={brojUlaza} onChange={(e) => setBrojUlaza(e.target.value)} />
                                                </div>
                                                <div className='payment__street-single'>
                                                    <label htmlFor="" data-en='Street' data-sr='Broj stana'>Broj stana</label>
                                                    <input type="text" name='brojStana' value={brojStana} onChange={(e) => setBrojStana(e.target.value)} />
                                                </div>
                                            </div>

                                            <label htmlFor="" data-en='State' data-sr='Država'>Država</label>
                                            <input type="text" name='drzava' value={drzava} onChange={(e) => setDrzava(e.target.value)} />

                                            <label htmlFor="" data-en='City' data-sr='Grad'>Grad</label>
                                            <input type="text" name='grad' value={grad} onChange={(e) => setGrad(e.target.value)} />

                                            <label htmlFor="" data-en='Zip Code' data-sr='Poštanski broj'>Poštanski broj</label>
                                            <input type="text" name='postanskiBroj' value={postanskiBroj} onChange={(e) => setPostanskiBroj(e.target.value)} />

                                            <label htmlFor="" data-en='Phone number' data-sr='Broj telefona'>Broj telefona</label>
                                            <input type="text" name='brojTelefona' value={brojTelefona} onChange={(e) => setBrojTelefona(e.target.value)} />
                                        </div>
                                    </div>
                                </section>

                            ) : (

                                <section className='payment__section'>
                                    <div className='payment-border mb-2 p-2'>
                                        <h2>Podaci o kupcu</h2>
                                        <div className='user__data'>
                                            <label htmlFor="" data-en='Name' data-sr='Ime'>Ime</label>
                                            <input type="text" data='ime' name='ime' value={ime} onChange={(e) => setIme(e.target.value)} />

                                            <label htmlFor="" data-en='Last Name' data-sr='Prezime'>Prezime</label>
                                            <input type="text" name='prezime' value={prezime} onChange={(e) => setPrezime(e.target.value)} />

                                            <label htmlFor="" data-en='Email' data-sr='Email'>Email</label>
                                            <input type="email" name='prezime' value={email} onChange={(e) => setEmail(e.target.value)} />

                                            <div className='payment__street'>
                                                <div className='payment__street-single'>
                                                    <label htmlFor="" data-en='Street' data-sr='Ulica'>Ulica</label>
                                                    <input type="text" name='ulica' value={ulica} onChange={(e) => setUlica(e.target.value)} />
                                                </div>
                                                <div className='payment__street-single'>
                                                    <label htmlFor="" data-en='Street' data-sr='Broj ulaza'>Broj ulaza</label>
                                                    <input type="text" name='brojUlaza' value={brojUlaza} onChange={(e) => setBrojUlaza(e.target.value)} />
                                                </div>
                                                <div className='payment__street-single'>
                                                    <label htmlFor="" data-en='Street' data-sr='Broj stana'>Broj stana</label>
                                                    <input type="text" name='brojStana' value={brojStana} onChange={(e) => setBrojStana(e.target.value)} />
                                                </div>
                                            </div>

                                            <label htmlFor="" data-en='State' data-sr='Država'>Država</label>
                                            <input type="text" name='drzava' value={drzava} onChange={(e) => setDrzava(e.target.value)} />

                                            <label htmlFor="" data-en='City' data-sr='Grad'>Grad</label>
                                            <input type="text" name='grad' value={grad} onChange={(e) => setGrad(e.target.value)} />

                                            <label htmlFor="" data-en='Zip Code' data-sr='Poštanski broj'>Poštanski broj</label>
                                            <input type="text" name='postanskiBroj' value={postanskiBroj} onChange={(e) => setPostanskiBroj(e.target.value)} />

                                            <label htmlFor="" data-en='Phone number' data-sr='Broj telefona'>Broj telefona</label>
                                            <input type="text" name='brojTelefona' value={brojTelefona} onChange={(e) => setBrojTelefona(e.target.value)} />
                                        </div>
                                    </div>
                                </section>
                            )
                        }

                        <section className='payment__section'>

                            <div className='payment-border mb-2 p-2'>
                                <h2>Način preuzimanja</h2>
                                <div className='user__data'>
                                    <div className='radion__container'>
                                        <input type="radio" defaultChecked disabled name='preuzimanje' value={preuzimanje} onChange={(e) => setPreuzimanje(e.target.value)} />
                                        <label htmlFor="" data-en='Name' data-sr='Kurirska služba - Dostava na adresu'>Kurirska služba - Dostava na adresu</label>
                                    </div>
                                </div>
                            </div>

                            <div className='payment-border mb-2 p-2'>
                                <h2>Način plaćanja</h2>
                                <div className='user__data' id='placanje' onChange={(e) => setPlacanje(e.target.value)} >

                                

                                    <div className='radion__container mb-1'>
                                        <input type="radio" name='placanje' value='pouzece' defaultChecked={placanje === "pouzece"} />
                                        <label htmlFor="" data-en='Name' data-sr='Pouzećem / Plaćanje gotovinom'>Pouzećem / Plaćanje gotovinom</label>
                                    </div>

                                    <div className='radion__container'>
                                        <input type="radio" name='placanje' value='kartica' defaultChecked={placanje === "kartica"} />
                                        <label htmlFor="" data-en='Name' data-sr='Platna kartica'>Platna kartica</label>
                                    </div>

                                </div>
                            </div>

                            <div className='payment-border mb-2 p-2'>
                                <h2>Detalji porudžbine</h2>
                                <div className='user__data'>

                                    {
                                        cart.cartData.map((item, idx) => {
                                            // Niz sa slikama
                                            let sveSlike = item.slika_ime;
                                            let splitSlike = sveSlike.split(',');
                                            let slika_cela = splitSlike[0];

                                            return (
                                                <article className='order__single-product' key={item.proizvod_id} name='proizvod' id={item.proizvod_id} onLoad={() => dodajProizvod(item.proizvod_id)}>
                                                    <div className='order__details'>
                                                        <p data-en={item.proizvod_naziv_sr} data-sr={item.proizvod_naziv_sr}>{item.proizvod_naziv_sr}</p>
                                                        <p data-en="Size:" data-sr="Veličina:">Veličina: {item.proizvod_velicina}</p>
                                                        <p data-en={item.proizvod_boja_en} data-sr={item.proizvod_boja_sr}>Boja: {item.proizvod_boja_sr}</p>
                                                        {/*<p>Code: NP2021</p>*/}
                                                        <p data-en="Price:" data-sr="Cena:" className='text-bold'>Cena: {item.proizvod_cena} ,00 rsd</p>
                                                    </div>
                                                    <div className="order__image">
                                                        <img src={slike + slika_cela} alt="" />
                                                        <span onClick={() => handleRemoveFromCart(item)} ><IoTrashOutline className='icon-main ml-2' /></span>
                                                    </div>
                                                </article>
                                            )
                                        })
                                    }

                                    <div className='order__price'>
                                        <h3>Ukupno za plaćanje: <br /> (cena sa PDV-om) </h3>
                                        <h3> {cart.cartTotalPrice} ,00 rsd</h3>
                                    </div>

                                    {
                                        placanje == 'kartica' ? (
                                            <div className='button__order ' >
                                                <Link to='/banka' className="btn btn-with-100">Banka</Link>
                                            </div>

                                        ) : (
                                            <div className='button__order '>
                                                <button className="btn btn-with-100">Poruči</button>
                                            </div>
                                        )
                                    }
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