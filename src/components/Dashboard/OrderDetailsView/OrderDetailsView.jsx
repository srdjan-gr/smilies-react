import React, { useEffect, useState } from 'react'
import { RiDeleteBinLine, RiEditBoxLine } from 'react-icons/ri'
import api from '../../../api/api';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from '../../Message/Message';

import { useSelector, useDispatch } from 'react-redux';
import { getDashOrders } from "../../../redux/features/orders/ordersSlice"

const slike = process.env.REACT_APP_BACKEND_PRODUCT_IMAGES;

const OrderDetailsView = ({ order, setDetailsWindow, detailsWindow }) => {

    const { proizvod_cena, por_proizvodi, proizvod_ime, slika_ime, por_id, por_ime, por_prezime, por_email, por_broj_tel, por_ulica, por_broj_ulaz, por_broj_stan, por_drzava, por_grad, por_postanski_broj, por_preuzimanje, por_placanje, por_vreme_kreiranja, korisnici_korisnik_id, por_status } = order;

    const ordersList = useSelector((state) => state.ordersList)
    const { ordersLoading, ordersData, ordersMessage } = ordersList;


    const splitSlike = slika_ime.split(',');
    const splitIme = proizvod_ime.split(',');
    const splitPor = por_proizvodi.split(',');
    const price = proizvod_cena.split(',');


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDashOrders());
    }, [dispatch]);

    // Inicijalno stanje za brisanje ordera
    const [ordertDelete, setOrderDelete] = useState({
        id_por: '',
    });

    const deleteOrder = (id) => {
        if (window.confirm('Da li ste sigurni da želite da obrišete porudžbinu?')) {

            const sendData = {
                id_por: id,
            }

            api({
                method: 'post',
                url: 'orderDelete.php',
                data: sendData,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })
                .then((response) => {

                    if (response.data.uspesno) {
                        notifySuccess(response.data.uspesno);
                        setOrderDelete({ id_por: '', })
                        dispatch(getDashOrders());
                        setDetailsWindow(!detailsWindow);
                    } else if (response.data.greska) {
                        notifyError(response.data.greska);

                    } else if (response.data.info) {
                        notifyInfo(response.data.info);
                    }
                })
        }
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


    const orderStatus = (status) => {
        switch (status) {
            case 'ceka-slanje':
                return (
                    <div className='color-danger-muted '>
                        <label htmlFor="">Status porudžbine</label>
                        <input type="text" placeholder={status} name="subkat_en" disabled />
                    </div>
                )
            case 'isporuceno':
                return (
                    <div className='color-success-muted '>
                        <label htmlFor="">Status porudžbine</label>
                        <input type="text" placeholder={status} name="subkat_en" disabled />
                    </div>
                )
            case 'poslato':
                return (
                    <div className='color-info-muted '>
                        <label htmlFor="">Status porudžbine</label>
                        <input type="text" placeholder={status} name="subkat_en" disabled />
                    </div>
                )
            default:
                return (
                    <div className=''>
                        <label htmlFor="">Status porudžbine</label>
                        <input type="text" placeholder={status} name="subkat_en" disabled />
                    </div>
                )
        }
    }

    const orderImages = (splitSlike) => {

        let arr = [];
        let maxVal = splitSlike.length / 4;
        let delta = Math.floor(splitSlike.length / maxVal);

        for (let i = 0; i < splitSlike.length; i = i + delta) {
            arr.push(splitSlike[i]);
        }

        return arr.map((item, idx) => {
            return (
                <div key={idx} className='details__products-img-content'>
                    <img src={slike + item} alt="" />
                </div>
            )
        })
    }

    const orderPrice = (price) => {

        let arr = [];
        let maxVal = price.length / 4;
        let delta = Math.floor(price.length / maxVal);

        for (let i = 0; i < price.length; i = i + delta) {
            arr.push(price[i]);
        }

        const sum = arr.reduce((a, b) => {
            a = Number(a)
            b = Number(b)
            return a + b;
        });

        return (
            <h3>{sum} ,00 din</h3>
        )
    }



    return (
        <div className="category__container-inputs order__dash-details">
            <h3>Detalji porudžbine</h3>

            <div className='details__container'>

                <div className='details__form'>
                    <form >
                        <div className='form__inputs mr-2'>
                            <label htmlFor="">Ime</label>
                            <input type="text" placeholder={por_ime} name="subkat_sr" disabled />

                            <label htmlFor="">Prezime</label>
                            <input type="text" placeholder={por_prezime} name="subkat_en" disabled />

                            <label htmlFor="">Email</label>
                            <input type="text" placeholder={por_email} name="subkat_en" disabled />

                            <label htmlFor="">Broj telefona</label>
                            <input type="text" placeholder={por_broj_tel} name="subkat_en" disabled />
                        </div>

                        <div className='form__inputs mr-2'>
                            <label htmlFor="">Ulica</label>
                            <input type="text" placeholder={por_ulica} name="subkat_en" disabled />

                            <div className='form__inputs-different'>
                                <div className='form__inputs mr-2'>
                                    <label htmlFor="">Broj ulaza</label>
                                    <input type="text" placeholder={por_broj_ulaz} name="subkat_en" disabled />
                                </div>
                                <div className='form__inputs'>
                                    <label htmlFor="">Broj stana</label>
                                    <input type="text" placeholder={por_broj_stan} name="subkat_en" disabled />
                                </div>
                            </div>

                            <label htmlFor="">Država</label>
                            <input type="text" placeholder={por_drzava} name="subkat_en" disabled />

                            <label htmlFor="">Grad</label>
                            <input type="text" placeholder={por_grad} name="subkat_en" disabled />

                            <label htmlFor="">Poštanski broj</label>
                            <input type="text" placeholder={por_postanski_broj} name="subkat_en" disabled />
                        </div>

                        <div className='form__inputs'>
                            <label htmlFor="">Način preuzimanja</label>
                            <input type="text" placeholder={por_preuzimanje} name="subkat_en" disabled />

                            <label htmlFor="">Način placanja</label>
                            <input type="text" placeholder={por_placanje} name="subkat_en" disabled />

                            <label htmlFor="">Vreme kreiranja porudzbine</label>
                            <input type="text" placeholder={por_vreme_kreiranja} name="subkat_en" disabled />

                            {orderStatus(por_status)}

                            <label htmlFor="">Registrovani korisnik</label>
                            <input type="text" placeholder={korisnici_korisnik_id} name="subkat_en" disabled />
                        </div>
                    </form>
                </div>

                <div className='mt-1 mb-1'>
                    <span className='mb-1'>
                        <label className='accent' htmlFor="">Vrednost porudžbine:</label>
                    </span>

                    <div className='details__price'>
                        <div className='details__products-info p-0'>
                            {orderPrice(price)}
                        </div>
                    </div>
                </div>

                <div className='mt-1 mb-1'>
                    <span className='mb-1'>
                        <label className='accent' htmlFor="">Poručeni proizvodi:</label>
                        <span className='order__product-count ml-1'><h3>{splitPor.length}</h3></span>
                    </span>

                    <div className='details__products'>
                        <div className='details__products-info'>
                            {
                                splitIme.map((el, idx) => {
                                    return (
                                        <h3 key={idx}>{`${idx + 1}:  ${el}`}</h3>
                                    )
                                })
                            }
                        </div>
                        <div className='details__products-img'>
                            {orderImages(splitSlike)}
                        </div>
                    </div>
                </div>

                <div className='details__options'>
                    <div className='details__options-inner mb-2'>
                        <RiEditBoxLine className='icon-dash-info icon-main mr-1' />
                        <RiDeleteBinLine className='icon-dash-danger  icon-main'
                            onClick={() => deleteOrder(por_id)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetailsView