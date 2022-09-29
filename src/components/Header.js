import {Link} from 'react-router-dom';
import React from 'react';
import '../index.css';
import logo from '../res/img/logo.png'

function Header() {
  return (
    <div className=''>
      <div>
        <div className=''>
          <Link to="/Contacto">
            <button className=''>Contacto</button>
          </Link>
        </div>
        <h1 className=''>MMMMM</h1>
        <div>
          <img src={logo} alt='Logo' />
        </div>
        <h1 className=''>CHANGUCHE'S</h1>
        <div>
          <Link to="/Catalogo">
            <button className=''>Comidas</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;