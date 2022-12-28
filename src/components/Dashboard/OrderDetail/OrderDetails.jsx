import React, { useEffect, useState } from 'react'
import api from '../../../api/api';
import { RiDeleteBinLine, RiEditBoxLine, RiSearch2Line, RiEyeLine } from 'react-icons/ri'


import { useSelector, useDispatch } from 'react-redux';
import { getDashOrders } from "../../../redux/features/orders/ordersSlice"

import OrderDetailsView from '../OrderDetailsView/OrderDetailsView';
import OrderDetailsEdit from '../OrderDetailsEdit/OrderDetailsEdit';
// import { render } from '@testing-library/react';

const slike = process.env.REACT_APP_BACKEND_PRODUCT_IMAGES;

const OrderDetails = ({ orderDetailsId, orderOption, detailsWindow, setDetailsWindow }) => {

    const ordersList = useSelector((state) => state.ordersList)
    const { ordersLoading, ordersData, ordersMessage } = ordersList;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDashOrders());
    }, [dispatch]);


    return (
        <article>
            {
                ordersData.map((order, idx) => {

                    if (orderDetailsId === order.por_id) {

                        if (orderOption == 'view') {

                            return (
                                <OrderDetailsView key={idx}
                                    order={order}

                                    setDetailsWindow={setDetailsWindow}
                                    detailsWindow={detailsWindow}
                                />
                            )

                        }
                        else if (orderOption == 'edit') {
                            return (
                                <OrderDetailsEdit key={idx}
                                    order={order}

                                    setDetailsWindow={setDetailsWindow}
                                    detailsWindow={detailsWindow}
                                />
                            )
                        }
                    }
                })
            }
        </article>
    )
}

export default OrderDetails