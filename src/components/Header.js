import '../index.css';
import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../res/img/logo.png'

function Header() {
  return (
    <div className='header'>
      <div id='btnLeft'>
        <Link to="/contacto">
          <button className='headerBtn'>Contacto</button>
        </Link>
      </div>

      <h1 id='name'>MMMMM</h1>
      
      <img id='logo' src={logo} alt='Logo' />
      
      <h1 id='name'>CHANGUCHE'S</h1>
      
      <div id='btnRight'>
        <Link to="/catalogo">
          <button className='headerBtn'>Comidas</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;