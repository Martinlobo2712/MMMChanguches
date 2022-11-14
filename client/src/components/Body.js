import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';



function Body() {
  return (
    <div className='body'>
      <div className='home-sections'>
        <h1 className='title'>NUESTRO SERVICIO</h1>
        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Nisl vel pretium lectus quam. Magna fringilla urna porttitor rhoncus. Sed faucibus turpis in eu mi bibendum neque egestas congue. Tellus in hac habitasse platea dictumst vestibulum. Amet massa vitae tortor condimentum lacinia quis vel eros. Suspendisse potenti nullam ac tortor vitae purus. Augue mauris augue neque gravida in fermentum et sollicitudin. Massa id neque aliquam vestibulum morbi. Fermentum odio eu feugiat pretium nibh. Tristique senectus et netus et malesuada fames ac turpis. Adipiscing tristique risus nec feugiat. Aliquet porttitor lacus luctus accumsan tortor. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Est lorem ipsum dolor sit amet consectetur. Cras sed felis eget velit aliquet sagittis id consectetur.</p>
        <Link to='/signup'>
        <button className='headerBtn'>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Body;