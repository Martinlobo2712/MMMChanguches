import React from 'react';
import '../index.css';
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

      <h1 className='name left'>MMMM</h1>
      
      <Link id='lg-link'to='/'>
        <img id='logo' src={logo} alt='Logo' />
      </Link>

      <h1 className='name right'>CHANGUCHE'S</h1>
      
      <div id='btnRight'>
        <Link to="/catalogo">
          <button className='headerBtn'>Comidas</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;