import './index.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Contacto from './components/Contacto';
import Catalogo from './components/Catalogo';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Body />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
