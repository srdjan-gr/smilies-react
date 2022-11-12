import React from 'react'

const AddSubCategory = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className='category__container'>
      <div className="category__container-header">
        <h2>Dodavanje Podkategoriju</h2>
      </div>

      <div className="category__container-inputs p-2">

            <form form form form onSubmit={handleSubmit} >
              <label htmlFor="">Ime Podkategoriju Srpski</label>
              <input type="text" placeholder='Ime Podkategoriju na Srpskom' name="podkat_sr"  />

              <label htmlFor="">Ime Podkategoriju Engleski</label>
              <input type="text" placeholder='Ime Podkategoriju na Engleskom' name="podkat_en"  />

              <div className="category__container-inputs-content-buttons">
                <button className='btn__dash-regular dash-button-success  mt-2 mr-1'>Dodaj Podkategoriju</button>
              </div>
            </form>

      </div>
    </div>
  )
}

export default AddSubCategory