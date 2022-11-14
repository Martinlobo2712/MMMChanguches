import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: ''
  });

  const handleSubmit = async e => {
    try {
      await e.preventDefault();
      
      const url = '/user';

      const sendForm = await axios.post(url, formData);

      console.log(`Form sent: ${sendForm}`);
    } catch (err) {
      console.error(`Post error ${err}`);
    }
  }

  return (
    <div className='signup-body'>
      <form onSubmit={handleSubmit} className=''>
        <h2 className='h2title'>Nombre</h2>   
        <input 
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          value={formData.name}
          type='text'
          name='name'
          className='signup-inputs'
        />

        <h2 className='h2title'>Apellido</h2>       
        <input 
          onChange={(e) => setFormData({...formData, surname: e.target.value})}
          value={formData.surname}
          type='text'
          name='surname'
          className='signup-inputs'
        />

        <h2 className='h2title'>Correo electrónico</h2>     
        <input 
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          value={formData.email}
          type='email'
          name='email'
          className='signup-inputs'
        />

        <h2 className='h2title'>Contraseña</h2>
        <input 
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          value={formData.password}
          type='password'
          name='password'
          className='signup-inputs'
        />
        <button className='signbtn'> Enviar</button>
      </form>
    </div>
  );
}

export default SignUp;