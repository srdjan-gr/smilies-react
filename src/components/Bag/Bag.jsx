import React from 'react'
import './Bag.css'
import { IoTrashOutline, IoCloseOutline } from 'react-icons/io5'

import image from '../../assets/img/products/3.jpg'

const Bag = ({ bag, setBag }) => {

    const closeBag = () => {
        setBag(!bag);
    }

    return (
        <section className={`${bag ? 'bagActive' : ''} bag`}>
            <div className="shopingBag">
                <div className="shopingBag__header">
                    <h2>Products in bag</h2>
                    <span><IoCloseOutline onClick={closeBag} /></span>
                </div>

                <div class="item">
                    <div class="item__image">
                        <img src={image} alt="" />
                    </div>

                    <div className="item__content">
                        <span><IoTrashOutline /></span>
                        <label for="desc" class="desc" data-en="Item" data-sr="Odevni predmet:">Item:</label>
                        <div class="item__description" id="desc">
                            <p>Dress</p>
                            <p>Size: 36</p>
                            <p>Color: Red</p>
                            {/*<p>Code: NP2021</p>*/}
                            <p className='text-bold'>18000,00 rsd</p>
                        </div>

                        <label for="quant" data-en="Quantity:" data-sr="Količina:">Quantity:</label>
                        <div class="item__content-quantity" id="quant">
                            <select name="Quantity" id="quantity">
                                <optgroup label="">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                </div>

            </div>

            <h3>Total: 24000,00 rsd</h3>
            <button class="btn" data-en="Go to purchase" data-sr="Idi na plaćanje">Go to purchas page</button>
        </section>

    )
}

export default Bag