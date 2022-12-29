import React, { useEffect, useState } from 'react'
import api from '../../../api/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from '../../Message/Message';
import { RiCameraLine, RiDeleteBinLine, RiCheckboxCircleLine } from 'react-icons/ri'

import { useSelector, useDispatch } from 'react-redux';
import { getDashSubCategory } from "../../../redux/features/subcategoriesdash/subCategoriesDahsSlice";
import { getProducts } from "../../../redux/features/products/productsSlice";



const AddProduct = () => {
  // Subcategory state
  const subCategoryList = useSelector((state) => state.subCategoryDashList)
  const { subLoading, subData, subMessage } = subCategoryList;

  const [loading, setLoading] = useState(false);

  const [slike, setSlike] = useState([]);
  const [odrzavanje, setOdrzavanje] = useState([]);

  const [imeSr, setImeSr] = useState('');
  const [imeEn, setImeEn] = useState('');
  const [podkatpr, setPodkatpr] = useState('');
  const [cenapr, setCenapr] = useState('');
  const [snizenaCena, setSnizenaCena] = useState('');
  const [opisSr, setOpisSr] = useState('');
  const [opisEn, setOpisEn] = useState('');

  const [velicina, setVelicina] = useState('36');
  const [materijalSr, setMaterijalSr] = useState('');
  const [materijalEn, setMaterijalEn] = useState('');
  const [kolicina, setKolicina] = useState('1');
  const [bojaSr, setBojaSr] = useState('');
  const [bojaEn, setBojaEn] = useState('');
  const [tabela, setTabela] = useState('z');


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDashSubCategory());
  }, [dispatch]);


  // =====================================================================================
  // const [imageThumbnail, setImageThumbnail] = useState([]);
  // const handleImages = (e) => {
  //   setSlike([]);
  //   if (e.target.files) {

  //     // const selektovane = e.target.files;
  //     // const selektovaneSlikeNiz = Array.from(e.target.files);
  //     const sveSlike = Array.from(e.target.files).map((slika) => {
  //       return URL.createObjectURL(slika);
  //     });

  //     setSlike((prethodna) => prethodna.concat(sveSlike));

  //     Array.from(e.target.files).map((slike) => {
  //       return URL.revokeObjectURL(slike);
  //     });
  //   }
  // };

  // const imagesValidation = (images) => {
  //   if (images > 0 && images > 4) {
  //     return (
  //       <p className='color-danger-muted'>Odabrali ste više slika od maksimuma. Obrišite {images - 4}</p>
  //     )
  //   } else if (images == 4) {
  //     return (
  //       <RiCheckboxCircleLine className='color-info-success icon-main mt-1 color-success-muted' />
  //     )
  //   } else {
  //     return (
  //       <p className='color-info-muted'>Niste odabrali slike za proizvod.</p>
  //     )
  //   }
  // }
  // =====================================================================================



  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(false);

    const formData = new FormData();

    for (let i = 0; i < slike.length; i++) {
      formData.append('slike[]', slike[i]);
    }
    for (let a = 0; a < odrzavanje.length; a++) {
      formData.append('odrzavanje[]', odrzavanje[a]);
    }

    const sendData = {
      imeSr: imeSr,
      imeEn: imeEn,
      podkatpr: podkatpr,
      cenapr: cenapr,
      snizenaCena: snizenaCena,
      opisSr: opisSr,
      opisEn: opisEn,

      velicina: velicina,
      materijalSr: materijalSr,
      materijalEn: materijalEn,
      kolicina: kolicina,
      bojaSr: bojaSr,
      bojaEn: bojaEn,
      tabela: tabela,
    }

    for (let kljuc in sendData) {
      formData.append(kljuc, sendData[kljuc]);
    }

    // console.log(sendData)

    const resolveWithSomeData = new Promise(resolve => setTimeout(() => resolve("world"), 3000));


    api({
      method: 'post',
      url: 'product.php?fun=add',
      data: formData,

    })
      .then((response) => {
        // console.log(formData)

        if (response.data.uspesno) {

          notifySuccess(response.data.uspesno);

          setSlike([]);
          setImeSr('');
          setImeEn('');
          setPodkatpr('');
          setCenapr('');
          setSnizenaCena('');
          setOpisSr('');
          setOpisEn('');
          setOdrzavanje([]);
          setVelicina('36');
          setMaterijalSr('');
          setMaterijalSr('');
          setMaterijalEn('');
          setKolicina('1');
          setBojaSr('');
          setBojaEn('');
          setTabela('z');

          setLoading(false);

        } else if (response.data.greska) {
          notifyError(response.data.greska);
        } else if (response.data.info) {
          notifyInfo(response.data.info);
        }

      })
  }

  // Message je stilizovana komponenta Unutar Toast-a
  const notifyError = (odgovor) => {
    toast.error(<Message error={odgovor} />)
  }
  const notifySuccess = (odgovor) => {
    toast.success(<Message success={odgovor} />);
  }
  const notifyInfo = (odgovor) => {
    toast.info(<Message info={odgovor} />);
  }


  const notifyLoading = () => {
    // const id = toast.loading("Please wait...")
    //do something else
    // toast.update(id, { render: "All is good", type: "success", isLoading: false });
    toast.loading("Kreiranje proizvoda...");
  }




  return (

    <div className='product'>
      <div className="category__container-header">
        <h2>Dodavanje proizvoda</h2>
      </div>

      <form className='product__container product__layout-grid' onSubmit={handleSubmit} encType="multipart/form-data">

        <div className="product__container-inputs p-2">

          <label htmlFor="">Naziv proizvoda Sr</label>
          <input type="text" placeholder='Naziv proizvoda Sr' name="imeSr" value={imeSr} onChange={(e) => setImeSr(e.target.value)} />

          <label htmlFor="">Naziv proizvoda En</label>
          <input type="text" placeholder='Naziv proizvoda En' name="imeEn" value={imeEn} onChange={(e) => setImeEn(e.target.value)} />

          <div className="select-input">
            <label htmlFor="selectInputs">Podkategorija kojoj pripada</label>
            <select id='selectInputs' name="podkatpr" value={podkatpr} onChange={(e) => setPodkatpr(e.target.value)} >
              <option value=''>-- Odaberite podkategoriju --</option>
              {
                subData.map((item, idx) => {
                  return (
                    <option key={idx} value={item.podkat_id}>{item.podkat_naziv_sr}</option>
                  )
                })
              }
            </select>
          </div>

          <label className='color-success-muted' htmlFor="">Regularna cena proizvoda * cena bez ,00</label>
          <input type="text" placeholder='Regularna cena proizvoda' name="cenapr" value={cenapr} onChange={(e) => setCenapr(e.target.value)} />

          <label className='color-danger-muted' htmlFor="">Snižena cena proizvoda * cena bez ,00</label>
          <input type="text" placeholder='Snižena cena proizvoda' name="snizenaCena" value={snizenaCena} onChange={(e) => setSnizenaCena(e.target.value)} />


          <div className='select__group'>
            <div className="select__group-content">
              <label htmlFor="">Veličina</label>
              <select id='selectInputs' name="velicina" value={velicina} onChange={(e) => setVelicina(e.target.value)} >
                <option value="36">36</option>
                <option defaultValue="38">38</option>
                <option value="40">40</option>
                <option value="42">42</option>
                <option value="44">44</option>
                <option value="50">50</option>
                <option value="52">52</option>
              </select>
            </div>

            <div className="select__group-content">
              <label htmlFor="">Količina</label>
              <select id='selectInputs' name="kolicina" value={kolicina} onChange={(e) => setKolicina(e.target.value)} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div className="select__group-content">
              <label htmlFor="">Tabela Mera</label>
              <select id='selectInputs' name="tabela" value={tabela} onChange={(e) => setTabela(e.target.value)} >
                <option value="z">zenska</option>
                <option value="m">muska</option>
                <option value="n">nema</option>
              </select>
            </div>
          </div>

          <div className='select__group'>
            <div className="select__group-content">
              <label htmlFor="">Boja Sr</label>
              <input type="text" placeholder='Boja Sr' name="bojaSr" value={bojaSr} onChange={(e) => setBojaSr(e.target.value)} />
            </div>

            <div className="select__group-content">
              <label htmlFor="">Boja En</label>
              <input type="text" placeholder='Boja En' name="bojaEn" value={bojaEn} onChange={(e) => setBojaEn(e.target.value)} />
            </div>
          </div>

        </div>


        <div className="product__container-inputs p-2">
          <label htmlFor="">Materijal proizvoda Sr</label>
          <input type="text" placeholder='Materijal proizvoda Sr' name="materijalSr" value={materijalSr} onChange={(e) => setMaterijalSr(e.target.value)} />

          <label htmlFor="">Materijal proizvoda En</label>
          <input type="text" placeholder='Materijal proizvoda En' name="materijalEn" value={materijalEn} onChange={(e) => setMaterijalEn(e.target.value)} />

          <label htmlFor="">Opis proizvoda Sr</label>
          <textarea name="opis_en" id="" cols="40" rows="6" name="opisSr" value={opisSr} onChange={(e) => setOpisSr(e.target.value)} ></textarea>

          <label htmlFor="">Opis proizvoda En</label>
          <textarea name="opis_en" id="" cols="40" rows="6" name="opisEn" value={opisEn} onChange={(e) => setOpisEn(e.target.value)}></textarea>
        </div>


        <div className="product__container-inputs p-2">
          <div>
            <label htmlFor="">Slike proizvoda</label>
            <label htmlFor='image' className='input-file-styling'>
              <RiCameraLine className='icon-xl' />
              <input id='image' type="file" accept="image/jpg" multiple name="slike" onChange={(e) => setSlike(e.target.files)} />
            </label>
            <label className='color-info-muted' htmlFor="">Maksimalno 4 slike.</label>
          </div>

          <div className='image-preview'>
            <label htmlFor="">Pregled selektovanih slika</label>
            <div className="image__thumbnail">

            </div>
          </div>

          <div className="image__thumbnails-names">
            {/*imagesValidation(imageThumbnail.length)*/}
          </div>

          <div className='mt-2'>
            <label htmlFor="" >Slike održavanja proizvoda</label>
            <label htmlFor='odrzavanje' className='input-file-styling'>
              <RiCameraLine className='icon-xl' />
              <input id='odrzavanje' type="file" accept="image/jpg" multiple name="odrzavanje" onChange={(e) => setOdrzavanje(e.target.files)} />
            </label>
          </div>
        </div>

        <button className='btn__dash-regular dash-button-success'>Dodaj Proizvod</button>

      </form>
    </div>





  )
}

export default AddProduct