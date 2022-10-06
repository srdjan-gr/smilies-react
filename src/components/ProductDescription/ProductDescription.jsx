import { React, useState } from 'react'

// Styling
import './ProductDescription.css';


const ProductDescription = ({ proizvod }) => {

    const { proizvod_opis_en } = proizvod;

    return (

        <section>



            <div className="items-description" >
                <h1>Description</h1>

                <div className="items-description-cont">

                    <div className="items-description-cont-1">

                        <div className="items-description-cont-1-heading">
                            <h2 data-en="Product Details" data-sr="Detaljnije o proizvodu">Product Details</h2>
                        </div>

                        <div className="items-description-cont-1-content">
                            <div className="items-description-cont-1-single">
                                <p>{proizvod_opis_en}</p>
                            </div>
                            <div className="items-description-cont-1-single">
                                <label htmlFor="">Fabric:</label>
                                <p>100% Cotton </p>
                                <p>Non strech fabrick</p>
                            </div>
                            <div className="items-description-cont-1-single">
                                <label htmlFor="">Color:</label>
                                <p>Lorem, ipsum.</p>
                            </div>
                            <div className="items-description-cont-1-single">
                                <label htmlFor="">Wash symbols:</label>
                                <div className="wash" id="wash">
                                    <img src="../img/wash/4.png" alt="" />
                                    <img src="../img/wash/7.png" alt="" />
                                    <img src="../img/wash/N.png" alt="" />
                                    <img src="../img/wash/Q.png" alt="" />
                                    <img src="../img/wash/V.png" alt="" />
                                </div>
                            </div>
                            <div className="items-description-cont-1-single">
                                <p className="accent">Made in Serbia</p>
                            </div>
                        </div>
                    </div>

                    <div className="items-description-cont-1">
                        <div className="items-description-cont-1-heading">
                            <h2>Size chart</h2>
                            <p className="openPicto" id="openPicto">How to measure</p>
                        </div>
                        <div className="items-description-cont-1-content">
                            <table>
                                <thead>
                                    <tr>
                                        <td></td>
                                        <td>36</td>
                                        <td>38</td>
                                        <td>40</td>
                                        <td>42</td>
                                        <td>44</td>
                                        <td>46</td>
                                        <td>48</td>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Chest</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Waist</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Hip</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Shoulder width</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Sleve lenght</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Crotch</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>



        </section>

    )
}

export default ProductDescription