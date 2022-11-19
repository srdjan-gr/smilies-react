import React, { useEffect, useState } from 'react'
import axios from "axios";
import { RiDeleteBinLine, RiEditBoxLine, RiSearch2Line, RiEyeLine } from 'react-icons/ri'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from '../../Message/Message';

import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from "../../../redux/features/products/productsSlice"

const putanjaSlika = "http://localhost:8080/srdjan/smilies/sapi/img/products/";

const ProductList = () => {

  const productsList = useSelector((state) => state.productsList)
  const { loading, data, message } = productsList;


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  // const pregledSlika = () => {


  //   data.map((slika, idx) =>{
  //     return (

  //       <img className='column-small'>{slika.slika_ime} />

  //     )
  //   })



  // }

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
                <th className='column-large'>Naziv Sr</th>
                <th className='column-large'>Naziv En</th>
                <th className='column-large'>Opis Sr</th>
                <th className='column-large'>Opis En</th>
                <th className='column-large'>Kreirano</th>
                <th className='column-small'>Cena</th>
                <th className='column-small'>Slika</th>
                <th className='column-small options'>Opcije</th>
              </tr>
            </thead>

            <tbody>
              {
                data.map((product, idx) => {

                  let sveSlike = product.slika_ime;
                  let splitSlike = sveSlike.split(',');

                  console.log(splitSlike[0])

                  return (
                    <tr key={idx}>
                      <td className='column-x-small'>{product.proizvod_id}</td>
                      <td className='column-large'>{product.proizvod_naziv_sr}</td>
                      <td className='column-large'>{product.proizvod_naziv_en}</td>
                      <td className='column-large'>{product.proizvod_opis_sr}</td>
                      <td className='column-large'>{product.proizvod_opis_en}</td>
                      <td className='column-large'>{product.proizvod_vreme_dodat}</td>
                      <td className='column-small'>{product.proizvod_cena}</td>
                      <td className='column-small'><img src={putanjaSlika + splitSlike[0]} alt="" /></td>

                      <td className='column-small options'>
                        <RiEyeLine className='icon-dash-success icon-small' />
                        <RiEditBoxLine className='icon-dash-info icon-small' />
                        <RiDeleteBinLine className='icon-dash-danger  icon-small'
                          onClick={() => deleteProduct()} />
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

export default ProductList