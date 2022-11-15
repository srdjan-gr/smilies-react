import React, { useEffect, useState } from 'react'
import axios from "axios";
import { RiDeleteBinLine, RiEditBoxLine, RiSearch2Line } from 'react-icons/ri'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from '../../Message/Message';

const ProductList = () => {


  const deleteProduct = () => {

  }
  return (

    <div className='category__container category-list'>
      <div className="category__container-header">
        <h2>Lista Podkategorija</h2>
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
                <th className='column-x-small'>Id</th>
                <th className='column-medium'>Naziv Sr</th>
                <th className='column-medium'>Naziv En</th>
                <th className='column-large'>Kreirana</th>
                <th className='column-large'>Kreirao</th>
                <th className='column-small options'>Opcije</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <th className='column-x-small'>Id</th>
                <th className='column-medium'>Naziv Sr</th>
                <th className='column-medium'>Naziv En</th>
                <th className='column-large'>Kreirana</th>
                <th className='column-large'>Kreirao</th>

                <td className='column-small options'>
                  <RiEditBoxLine className='icon-dash-info icon-small' />
                  <RiDeleteBinLine className='icon-dash-danger  icon-small'
                    onClick={() => deleteProduct()} />
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>



  )
}

export default ProductList