import React from 'react';
import '../index.css';

function Body() {
  return (
    <div className='body'>
      <div className='home-sections'>
        <h1>NUESTRO SERVICIO</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Nisl vel pretium lectus quam. Magna fringilla urna porttitor rhoncus. Sed faucibus turpis in eu mi bibendum neque egestas congue. Tellus in hac habitasse platea dictumst vestibulum. Amet massa vitae tortor condimentum lacinia quis vel eros. Suspendisse potenti nullam ac tortor vitae purus. Augue mauris augue neque gravida in fermentum et sollicitudin. Massa id neque aliquam vestibulum morbi. Fermentum odio eu feugiat pretium nibh. Tristique senectus et netus et malesuada fames ac turpis. Adipiscing tristique risus nec feugiat. Aliquet porttitor lacus luctus accumsan tortor. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Est lorem ipsum dolor sit amet consectetur. Cras sed felis eget velit aliquet sagittis id consectetur.</p>
      </div>

      <div className='home-sections'>
        <h2>LOREM IPSUM</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Sem integer vitae justo eget magna fermentum iaculis eu. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Viverra orci sagittis eu volutpat odio facilisis. Fermentum leo vel orci porta non pulvinar neque laoreet. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Pharetra convallis posuere morbi leo. Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Ut placerat orci nulla pellentesque dignissim enim sit. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus.</p>
      </div>

      <div>
        <h2>UBICACION DE MMM CHANGUCHE'S</h2>

        <div className='map-container'>
          <iframe 
            title="MMM CHANGUCHE'S"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.1426785858!2d-58.50334507468736!3d-34.61590023630475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3d05457fbb%3A0xe160f4fce7f7c017!2sBuenos%20Aires!5e0!3m2!1sen!2sar!4v1664591209218!5m2!1sen!2sar"
            width="600"
            height="450" 
            style={{ border: 0,  }} 
            allowfullscreen="" 
            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Body;