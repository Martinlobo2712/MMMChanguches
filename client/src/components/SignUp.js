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
    <div className=''>
      <form onSubmit={handleSubmit} className=''>
        <h1 className=''>NOMBRE</h1>
        <label
          htmlFor='name'
          className=''>
            NOMBRE
        </label>
        <input 
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          value={formData.name}
          type='text'
          name='name'
          className=''
        />

        <h1 className=''>APELLIDO</h1>
        <label
          htmlFor='surname'
          className=''>
            APELLIDO
        </label>
        <input 
          onChange={(e) => setFormData({...formData, surname: e.target.value})}
          value={formData.surname}
          type='text'
          name='surname'
          className=''
        />

        <h1 className=''>CORREO ELECTRÓNICO</h1>
        <label
          htmlFor='email'
          className=''>
            CORREO ELECTRÓNICO
        </label>
        <input 
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          value={formData.email}
          type='email'
          name='email'
          className=''
        />

        <h1 className=''>CONTRASEÑA</h1>
        <label
          htmlFor='password'
          className=''>
            CONTRASEÑA
        </label>
        <input 
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          value={formData.password}
          type='password'
          name='password'
          className=''
        />
        <input 
          type='submit'
          name='submit'
          classname=''
        />
      </form>
    </div>
  );
}

export default SignUp;