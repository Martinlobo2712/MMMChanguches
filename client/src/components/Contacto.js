import React from 'react';
import '../index.css';

function Contacto() {
  return (
    <div className='contacto-body'>
      <div className='home-sections'>
        <form action="">
          <h2 className='h2title'>Contacto</h2>
          <input className='contacto-inputs' type="text"  name='Nombre' placeholder='Nombre'></input>
          <input className='contacto-inputs'type="text" name='Correo' placeholder='Correo'></input>
          <input className='contacto-inputs'type="text" name='Teléfono' placeholder='Teléfono'></input>
          <textarea name="mensaje"placeholder="Escriba su mensaje"></textarea>
          <button className='contactobtn'>Enviar</button>
        </form>
      </div>
      <div>
        <h2 className='title'>Ubicacion de mmm changuche's</h2>
        <div className='map-container'>
          <iframe 
            title="MMM CHANGUCHE'S"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.1426785858!2d-58.50334507468736!3d-34.61590023630475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3d05457fbb%3A0xe160f4fce7f7c017!2sBuenos%20Aires!5e0!3m2!1sen!2sar!4v1664591209218!5m2!1sen!2sar"
            width="600"
            height="450" 
            style={{ border: 0,  }} 
            allowfullscreen="" 
            loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
      <div className='contacto-info'>
        
          <h1 className='title-contacto'>LLAMANOS: 1152234768</h1>
        
          <h1 className='title-contacto'>EMAIL: MOMOSAMA09@GMAIL.COM</h1>
        
      </div>
    </div>
  );
}

export default Contacto;