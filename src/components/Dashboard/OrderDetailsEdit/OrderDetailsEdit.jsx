import React, { useEffect, useState } from 'react'
import { RiDeleteBinLine, RiEditBoxLine, RiCheckboxCircleLine } from 'react-icons/ri'
import api from '../../../api/api';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from '../../Message/Message';

import { useSelector, useDispatch } from 'react-redux';
import { getDashOrders } from "../../../redux/features/orders/ordersSlice"

const slike = process.env.REACT_APP_BACKEND_PRODUCT_IMAGES;

const OrderDetailsEdit = ({ order, setDetailsWindow, detailsWindow }) => {

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
                        <select name="vestatus"  >
                            <option defaultValue={status}>{status}</option>
                            <option defaultValue="Poslato">poslato</option>
                            <option defaultValue="Isporuceno">isporuceno</option>
                        </select>
                    </div>
                )
            case 'isporuceno':
                return (
                    <div className='color-success-muted '>
                        <label htmlFor="">Status porudžbine</label>
                        <select name="vestatus"   >
                            <option defaultValue={status}>{status}</option>
                        </select>
                    </div>
                )
            case 'poslato':
                return (
                    <div className='color-info-muted '>
                        <label htmlFor="">Status porudžbine</label>
                        <select name="status"  >
                            <option defaultValue={status}>{status}</option>
                            <option defaultValue="Isporuceno">isporuceno</option>
                        </select>
                    </div>
                )
            default:
                return (
                    <div className=''>
                        <label htmlFor="">Status porudžbine</label>
                        <input type="text" placeholder={status} />
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
            <h3>Izmena porudžbine</h3>

            <div className='details__container'>

                <div className='details__form'>
                    <form >
                        <div className='form__inputs mr-2'>
                            <label htmlFor="">Ime</label>
                            <input type="text" name="subkat_sr" defaultValue={por_ime} />

                            <label htmlFor="">Prezime</label>
                            <input type="text" name="subkat_en" defaultValue={por_prezime} />

                            <label htmlFor="">Email</label>
                            <input type="text" name="subkat_en" placeholder={por_email} disabled />

                            <label htmlFor="">Broj telefona</label>
                            <input type="text" name="subkat_en" defaultValue={por_broj_tel} />
                        </div>

                        <div className='form__inputs mr-2'>
                            <label htmlFor="">Ulica</label>
                            <input type="text" name="subkat_en" defaultValue={por_ulica} />

                            <div className='form__inputs-different'>
                                <div className='form__inputs mr-2'>
                                    <label htmlFor="">Broj ulaza</label>
                                    <input type="text" name="subkat_en" defaultValue={por_broj_ulaz} />
                                </div>
                                <div className='form__inputs'>
                                    <label htmlFor="">Broj stana</label>
                                    <input type="text" name="subkat_en" defaultValue={por_broj_stan} />
                                </div>
                            </div>

                            <label htmlFor="">Država</label>
                            <input type="text" name="subkat_en" defaultValue={por_drzava} />

                            <label htmlFor="">Grad</label>
                            <input type="text" name="subkat_en" defaultValue={por_grad} />

                            <label htmlFor="">Poštanski broj</label>
                            <input type="text" name="subkat_en" defaultValue={por_postanski_broj} />
                        </div>

                        <div className='form__inputs'>
                            <label htmlFor="">Način preuzimanja</label>
                            <input type="text" name="subkat_en" defaultValue={por_preuzimanje} />

                            <label htmlFor="">Način placanja</label>
                            <input type="text" name="subkat_en" defaultValue={por_placanje} />

                            <label htmlFor="">Vreme kreiranja porudzbine</label>
                            <input type="text" name="subkat_en" defaultValue={por_vreme_kreiranja} />

                            {orderStatus(por_status)}

                            <label htmlFor="">Registrovani korisnik</label>
                            <input type="text" placeholder={korisnici_korisnik_id} name="subkat_en" />
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
                        <RiCheckboxCircleLine className='icon-dash-success icon-main mr-1' />
                        <RiDeleteBinLine className='icon-dash-danger icon-main'
                            onClick={() => deleteOrder(por_id)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetailsEdit