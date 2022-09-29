import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Contacto from './Contacto';
import Catalogo from './Catalogo';
import Inicio from './Inicio';
import '../index.css';

function Body() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/Contacto" element={<Contacto />} />
      <Route path="/Catalogo" element={<Catalogo />} />
    </Routes>
  );
}

export default Body;