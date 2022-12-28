import React, { useState, useEffect } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import OrderDetails from '../OrderDetail/OrderDetails';

const DetailsWindow = ({ detailsWindow, setDetailsWindow, orderDetailsId, orderOption }) => {

    const [detailsId, setDetailsId] = useState('');

    const closeDetailsWindow = () => {
        setDetailsWindow(!detailsWindow);
    }

    return (
        <section className={`${detailsWindow ? 'detailsActive' : ''} details__window`} >
            <article className='details__window-background' onClick={() => closeDetailsWindow()}></article>

            <article className='details__window-details'>
                <RiCloseLine className='icon-main icon-position' onClick={() => closeDetailsWindow()} />

                <OrderDetails

                    detailsId={detailsId}
                    setDetailsId={setDetailsId}
                    orderDetailsId={orderDetailsId}
                    orderOption={orderOption}
                    detailsWindow={detailsWindow}
                    setDetailsWindow={setDetailsWindow} />

            </article>
        </section>
    )

    // }


}

export default DetailsWindow