import '../index.css';
import fbIcon from '../res/img/facebook-icon.png';
import pedYaIcon from '../res/img/pedidosya-icon.png';
import insIcon from '../res/img/instagram-icon.png';
import {Link} from 'react-router-dom';
import React from 'react';
import SimpsonsQuote from './SimpsonsQuote';


function Footer() {
  return (
    <div className='footer'>
      <div className='div-footer'>
        <div id='btnLeft'>
          <Link to="/">
            <button className='headerBtn'> ⋘ Volver</button>
          </Link>
        </div>
      </div>
      <div className='div-footer'>
        <ul className='wrapper'>
          <a target="blank" href="https://facebook.com">
            <li className='icon facebook'>
              <img className='icons' src={fbIcon} alt='icono de facebook' />
              <span className='tag'>Facebook</span>
              <span><i className=''></i></span>
            </li>
          </a>
          <a target="blank" href="https://pedidosya.com">
            <li className='icon pedidosYa'>
              <img className='icons' src={pedYaIcon} alt='icono de pedidos ya' />
              <span className='tag'>Pedidos Ya</span>
              <span><i className=''></i></span>
            </li>
          </a>
          <a classname="bottom-fix" target="blank" href="https://instagram.com">
            <li className='icon instagram'>
              <img className='icons' src={insIcon} alt='icono de instagram' />
              <span className='tag'>Instagram</span>
              <span><i className=''></i></span>
            </li>
          </a>
        </ul>
      </div>
      <div className='div-footer'>
        <SimpsonsQuote />
      </div>
    </div>
  );
}

export default Footer;