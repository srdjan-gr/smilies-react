import React, { useEffect, useState } from 'react'
import api from '../../../api/api';
import { RiDeleteBinLine, RiEditBoxLine, RiSearch2Line, RiEyeLine } from 'react-icons/ri'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from '../../Message/Message';

import { useSelector, useDispatch } from 'react-redux';
import { getDashOrders } from "../../../redux/features/orders/ordersSlice"
import { render } from '@testing-library/react';

const OrderDetails = ({ orderDetailsId, orderOption, detailsWindow, setDetailsWindow }) => {

    const ordersList = useSelector((state) => state.ordersList)
    const { ordersLoading, ordersData, ordersMessage } = ordersList;

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

    return (
        <article>
            {
                ordersData.map((order, idx) => {
                    if (orderDetailsId === order.por_id) {

                        if (orderOption == 'view') {
                            return (
                                <div key={idx} className="category__container-inputs order__details">
                                    <h3>Detalji porudžbine</h3>

                                    <div className='details__container'>

                                        <div className='details__form'>
                                            <form >
                                                <div className='form__inputs mr-2'>
                                                    <label htmlFor="">Ime</label>
                                                    <input type="text" placeholder={order.por_ime} name="subkat_sr" disabled />

                                                    <label htmlFor="">Prezime</label>
                                                    <input type="text" placeholder={order.por_prezime} name="subkat_en" disabled />

                                                    <label htmlFor="">Email</label>
                                                    <input type="text" placeholder={order.por_email} name="subkat_en" disabled />

                                                    <label htmlFor="">Broj telefona</label>
                                                    <input type="text" placeholder={order.por_broj_tel} name="subkat_en" disabled />
                                                </div>

                                                <div className='form__inputs mr-2'>
                                                    <label htmlFor="">Ulica</label>
                                                    <input type="text" placeholder={order.por_ulica} name="subkat_en" disabled />

                                                    <label htmlFor="">Broj ulaza</label>
                                                    <input type="text" placeholder={order.por_broj_ulaz} name="subkat_en" disabled />

                                                    <label htmlFor="">Broj stana</label>
                                                    <input type="text" placeholder={order.por_broj_stan} name="subkat_en" disabled />

                                                    <label htmlFor="">Država</label>
                                                    <input type="text" placeholder={order.por_drzava} name="subkat_en" disabled />

                                                    <label htmlFor="">Grad</label>
                                                    <input type="text" placeholder={order.por_grad} name="subkat_en" disabled />

                                                    <label htmlFor="">Poštanski broj</label>
                                                    <input type="text" placeholder={order.por_postanski_broj} name="subkat_en" disabled />
                                                </div>

                                                <div className='form__inputs'>
                                                    <label htmlFor="">Način preuzimanja</label>
                                                    <input type="text" placeholder={order.por_preuzimanje} name="subkat_en" disabled />

                                                    <label htmlFor="">Način placanja</label>
                                                    <input type="text" placeholder={order.por_placanje} name="subkat_en" disabled />

                                                    <label htmlFor="">Vreme kreiranja porudzbine</label>
                                                    <input type="text" placeholder={order.por_vreme_kreiranja} name="subkat_en" disabled />

                                                    {orderStatus(order.por_status)}

                                                    <label htmlFor="">Registrovani korisnik</label>
                                                    <input type="text" placeholder={order.korisnici_korisnik_id} name="subkat_en" disabled />
                                                </div>
                                            </form>
                                        </div>

                                        <div>
                                            <h3>Poručeni proizvodi</h3>
                                            <div className='details__products'>

                                            </div>
                                        </div>

                                        <div className='details__options'>
                                            <RiEditBoxLine className='icon-dash-info icon-xl mr-1' />
                                            <RiDeleteBinLine className='icon-dash-danger  icon-xl'
                                                onClick={() => deleteOrder(order.por_id)} />
                                        </div>
                                    </div>
                                </div >
                            )
                        } else if (orderOption == 'edit') {
                            return (
                                <div key={idx}>
                                    <h3>{order.por_ime}</h3>
                                    <h3>{orderOption}</h3>



                                </div>
                            )
                        }
                    }
                })
            }
        </article >
    )
}

export default OrderDetails