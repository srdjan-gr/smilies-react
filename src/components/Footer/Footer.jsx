import React from 'react'
import { Link } from 'react-router-dom';
import Map from '../Map/Map';

// Styling
import './Footer.css'
import dina from '../../assets/img/payment/dinacard.png'
import master from '../../assets/img/payment/mastercard.jpg'
import visa from '../../assets/img/payment/visa.png'
import visaVerified from '../../assets/img/payment/verifiedbyvisa.png'
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5'
let iconStyle = {
  cursor: 'pointer',
  fontSize: '2.8rem',
  marginLeft: '2rem'
};

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="visit-us">
          {/*<h2 className="visit">Visit Us in our store or on socials</h2>*/}
          <h2 className="visit">Visit us on our socials</h2>
        </div>

        <div className="footer-main">
          <div className="map">
            <Map />
          </div>

          <div className="socials">
            { /*  <div className="socials--content">
                    <a>     
                    <ion-icon name="navigate-outline"></ion-icon>
                    <p className="description">Maršala Birjuzova 24, Beograd</p>
                    </a>
                    </div>*/}

            <div className="socials--content">
              <a href="https://www.facebook.com/Smilies-Fashion-studio-1404818579843798" target="_blank" rel="noopener noreferrer">
                <span style={iconStyle}><IoLogoFacebook /></span>
                <p>smilies_s</p>
              </a>
            </div>
            <div className="socials--content">
              <a href="https://www.instagram.com/smilies_s/?hl=en" target="_blank">
                <span style={iconStyle}><IoLogoInstagram /></span>
                <p>smilies_s</p>
              </a>
            </div>
          </div>

          <div className="privacy">
            <ul>
              <h2>Purchasing Information</h2>
              <li> <Link to="" target="_blank">Terms of use</Link></li>
              <li> <Link to="" target="_blank">Privacy Policy</Link></li>
              <li> <Link to="" target="_blank">Cookies policy</Link></li>
            </ul>
          </div>
          <div className="privacy">
            <ul>
              <h2>Costumer Service</h2>
              <li> <Link to="" target="_blank">Delivery</Link></li>
              <li> <Link to="" target="_blank">Complaints</Link></li>
              <li> <Link to="" target="_blank">Rights of Withdrawal/Refund</Link></li>
              <li> <Link to="" target="_blank">Cancelation form</Link></li>
            </ul>
          </div>
        </div>

        <div className="pay">
          <div className="pay--logo">
            <img src={visa} alt="visalogo" />
            <img src={dina} alt="dinalogo" />
            <img src={master} alt="masterlogo" />
            <img src={visaVerified} alt="visaverifiedlogo" />
          </div>
        </div>

        <div className="shopingrights">
          <div className="rights--txt">
            <p>Podaci su informativnog karaktera i podložni su izmenama. Nastojimo da budemo što precizniji
              u
              opisu proizvoda, prikazu slika i samih cena, ali ne možemo garantovati da su sve informacije
              kompletne i bez grešaka. <br />
              Svi artikli prikazani na sajtu su deo naše ponude i ne podrazumeva
              da su dostupni u svakom trenutku. Fotografije ne moraju u potpunosti odgovarati stvarnom
              izgledu proizvoda.
            </p>
          </div>
        </div>

        <div className="copyright">
          <p className="SC"> Smilies Online Fashion 2022 &copy;
            {/*<script>
              document.write(new Date().getFullYear())
            </script>*/}
            All rights reserved
          </p>
          <a href="#">D&D Srdjan Grujeskovic</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer