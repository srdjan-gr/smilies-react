import React from 'react'
import { Link } from 'react-router-dom';

const PaymentForm = () => {


    const handlePaymentSubmit = () => {

    }


    return (
        <form onSubmit={handlePaymentSubmit}>

            <article >
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

                            </div>
                        </div>

                        <div className='button__order'>
                            <Link to="/payment" className="btn btn-with-100">Poruči</Link>
                        </div>

                    </section>

                </div>
            </article>
        </form>
    )
}

export default PaymentForm