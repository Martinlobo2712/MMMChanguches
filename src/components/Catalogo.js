import '../index.css';
import sdwchBondiola from '../res/img/sandwich-bondiola.png';
import React from 'react';

function Catalogo() {
  return (
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus autem aspernatur sit ullam iure sequi dolor iste ad, adipisci voluptatibus quis, ratione quos omnis placeat eaque earum quia architecto in.</p>
      <div>
        <img className='' src={sdwchBondiola} alt='Sandwich de Bondiola' />
        <span>
          <h2>EL BARTO</h2>
          <p></p>
        </span>
      </div>
    </div>
  );
}

export default Catalogo;