import React from 'react';
import sdwchBondiola from '../res/img/sandwich-bondiola.png'
import '../index.css';

function Catalogo() {
  return (
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus autem aspernatur sit ullam iure sequi dolor iste ad, adipisci voluptatibus quis, ratione quos omnis placeat eaque earum quia architecto in.</p>
      <div>
        <img src={sdwchBondiola} alt='Sandwich de Bondiola' />
        <span>
          <h2>EL BARTO</h2>
          <p></p>
        </span>
      </div>
    </div>
  );
}

export default Catalogo;