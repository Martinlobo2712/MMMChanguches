import '../index.css';
import fbIcon from '../res/img/facebook-icon.png';
import pedYaIcon from '../res/img/pedidosya-icon.png';
import insIcon from '../res/img/instagram-icon.png';
import React from 'react';

function Footer() {
    return (
      <div className='footer'>
        <ul className='wrapper'>
          <li className='icon facebook'>
            <img className='icons' src={fbIcon} alt='icono de facebook' />
            <span className='tag'>Facebook</span>
            <span><i className=''></i></span>
          </li>
          <li className='icon pedidosYa'>
            <img className='icons' src={pedYaIcon} alt='icono de pedidos ya' />
            <span className='tag'>Pedidos Ya</span>
            <span><i className=''></i></span>
          </li>
          <li className='icon instagram'>
            <img className='icons' src={insIcon} alt='icono de instagram' />
            <span className='tag'>Instagram</span>
            <span><i className=''></i></span>
          </li>
        </ul>
      </div>
    );
  }

export default Footer;