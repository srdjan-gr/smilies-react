import React from 'react'

const AddSubCategory = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='category__container container-height'>
            <div className="category__container-header">
                <h2>Dodavanje Podkategorije</h2>
            </div>

            <div className="category__container-inputs p-2">

                <form form form form onSubmit={handleSubmit} >
                    <label htmlFor="">Ime Podkategorije Srpski</label>
                    <input type="text" placeholder='Ime Podkategorije na Srpskom' name="podkat_sr" />

                    <label htmlFor="">Ime Podkategorije Engleski</label>
                    <input type="text" placeholder='Ime Podkategorije na Engleskom' name="podkat_en" />

                    <div className="select-input">
                        <label htmlFor="selectInputs">Kategorija kojoj pripada</label>
                        <select id='selectInputs'>
                            <option value="0">-- Odaberite kategoriju --</option>
                            <option value="grapefruit">Grapefruit</option>

                        </select>
                    </div>

                    <div className="category__container-inputs-content-buttons">
                        <button className='btn__dash-regular dash-button-success  mt-2 mr-1'>Dodaj Podkategoriju</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default AddSubCategory