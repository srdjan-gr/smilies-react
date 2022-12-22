import React, { useEffect, useState } from 'react'
import api from '../../../api/api';
import { RiDeleteBinLine, RiEditBoxLine, RiSearch2Line, RiEyeLine } from 'react-icons/ri'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from '../../Message/Message';

import { useSelector, useDispatch } from 'react-redux';
import { getDashOrders } from "../../../redux/features/orders/ordersSlice"
const slike = process.env.REACT_APP_BACKEND_PRODUCT_IMAGES;

const Orders = () => {

    const ordersList = useSelector((state) => state.ordersList)
    const { ordersLoading, ordersData, ordersMessage } = ordersList;


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDashOrders());
    }, [dispatch]);

    const orderStatus = (status) => {
        switch (status) {
            case 'ceka-slanje':
                return (
                    <span className='order__status order__status-danger'></span>
                )
              break;
            case 'poslato':
                return (
                    <span className='order__status order__status-info'></span>
                )
                break;
            case 'isporuceno':
                return (
                    <span className='order__status order__status-success'></span>
                )
              break;
            default:
                return (
                    <span className='order__status order__status-default'></span>
                )
          }
    }

    return (
        <div className='category__container category-list'>
            <div className="category__container-header">
                <h2>Lista porudžbina</h2>
            </div>

            <div className="category__container-inputs">

                <div className="list__search">
                    <div className="search-input">
                        <RiSearch2Line className='icon-small mr-1' />
                        <input type="text" />
                    </div>
                </div>

                <div className="table">
                    <table >
                        <thead>
                            <tr>
                                <th className='column-x-small'>OId</th>
                                <th className='column-x-small'>Status</th>
                                <th className='column-medium'>Ime</th>
                                <th className='column-medium'>Prezime</th>
                                <th className='column-medium'>Email</th>
                                <th className='column-medium'>Tel</th>
                                {   /* <th className='column-medium'>Ulica</th>
                                <th className='column-small'>Ulaz</th>
                                <th className='column-small'>Broj</th>
                                <th className='column-small'>Država</th>
                                <th className='column-small'>Grad</th>
                                <th className='column-small'>Poš.br</th> */}
                                <th className='column-small'>Plaćanje</th>
                                <th className='options'>Opcije</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                ordersLoading ? <tr><td><p>Loading...</p></td></tr> : ordersData.greska ? <tr><td><h3 className='color-danger mt-1 tc-danger-muted'>{ordersData.greska}</h3></td></tr> :

                                    ordersData.map((order, idx) => {

                                        return (
                                            <tr key={idx}>
                                                <td className='column-x-small'>{order.por_id}</td>
                                                <td className='column-x-small'>
                                                    { orderStatus(order.por_status) }
                                                </td>
                                                <td className='column-medium'>{order.por_ime}</td>
                                                <td className='column-medium'>{order.por_prezime}</td>
                                                <td className='column-medium'>{order.por_email}</td>
                                                <td className='column-medium'>{order.por_broj_tel}</td>
                                                {/*<td className='column-medium'>{order.por_ulica}</td>
                                                <td className='column-small'>{order.por_broj_ulaz}</td>
                                                <td className='column-small'>{order.por_broj_stan}</td>
                                                <td className='column-small'>{order.por_drzava}</td>
                                                <td className='column-small'>{order.por_grad}</td>
                                                <td className='column-small'>{order.por_postanski_broj}</td>*/}
                                                <td className='column-small'>{order.por_placanje}</td>
                                                <td className=' options'>
                                                    <RiEyeLine className='icon-dash-success icon-small' />
                                                    <RiEditBoxLine className='icon-dash-info icon-small' />
                                                    <RiDeleteBinLine className='icon-dash-danger  icon-small' />
                                                </td>
                                            </tr>
                                        )
                                    })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Orders