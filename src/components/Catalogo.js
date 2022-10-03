import '../index.css';
import elbarto from '../res/img/el barto.jpg';
import latranqui from '../res/img/la tranqui.jpg';
import React from 'react';

function Catalogo() {
  return (
    <div className='catalogo-body'>
      <h1 className='title'>Catalogo</h1>
      <div className='item-a'>
      <img className='img-a' src={elbarto} alt='Sandwich de Bondiola'/>
      <div className='txt-a'>
        <h1 className='-h1a'>El Barto</h1>
        <p className='-pa'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Sem integer vitae justo eget magna fermentum iaculis eu. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Viverra orci sagittis eu volutpat odio facilisis.</p>
      </div>
      
      </div>
      <div className='item-b'>
        <div className='txt-b'>
          <h1 className='-h1b'>La Tranqui</h1>
          <p className='-pb'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Sem integer vitae justo eget magna fermentum iaculis eu. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Viverra orci sagittis eu volutpat odio facilisis.</p>
        </div>
        <img className='img-b' src={latranqui} alt='Sandwich de Mila'/>
      </div>
      
    </div>
  );
}

export default Catalogo;