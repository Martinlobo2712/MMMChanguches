import '../index.css';
import engorroso from '../res/img/egorroso.png';
import otraronda from '../res/img/otra ronda.jpg';
import atomico from '../res/img/atomica.jpg';
import lomo from '../res/img/el barto.jpg';
import morti from '../res/img/morti.jpg';
import chori from '../res/img/botellon.jpg';


function Catalogo() {
  return (
    <div className='catalogo-body'>
      <h1 className='title'>Catalogo</h1>
        <div className='item-a'>
          <img className='img-a' src={engorroso} alt='Sandwich de fiambre'/>
          <div className='txt-a'>
            <h1 className='-h1a'>El Engorroso</h1>
              <p className='-pa'>sanguche en pan figaza con rebozante queso derretido y unas pancetitas que no te dejan indiferente. tan grande y chorreante es que es recomendable no comer por una semana antes de pedirlo.</p>
          </div>
      
        </div>
        <div className='item-b'>
          <div className='txt-b'>
            <h1 className='-h1b'>Otra Ronda</h1>
            <p className='-pb'>este changu es una opcion liviana para quien no muere de hambre pero es provisor y desea no sentir el estomago vacio.(se recomienda pedir con una cerveza rubia)</p>
          </div>
          <img className='img-b' src={otraronda} alt='Sandwich liviano'/>
        </div>
        <div className='item-a'>
          <img className='img-a' src={atomico} alt='Sandwich con limon'/>
          <div className='txt-a'>
            <h1 className='-h1a'>La Atomica</h1>
              <p className='-pa'>referencia a fallout, ese toque acido del  limon te hara sentir en un verdadeo futuro postapocaliptico, viene con una nuke cola incluida y podes elegir su sabor, cherry, dark o una deliciosa ¡quantum!</p>
          </div>
      
        </div>
        <div className='item-b'>
          <div className='txt-b'>
            <h1 className='-h1b'>La Gorda </h1>
            <p className='-pb'>bondiola bañada en grasa vacuna con un toque de perejil, unos huevos fritos gigantes y un aroma extravagante</p>
          </div>
          <img className='img-b' src={lomo} alt='Sandwich de Mila'/>
        </div>
        <div className='item-a'>
          <img className='img-a' src={chori} alt='Sandwich con limon'/>
          <div className='txt-a'>
            <h1 className='-h1a'>El Botellon</h1>
              <p className='-pa'>chori con un diametro de 20cm, se debe cortar al medio y rellenar con salsa criolla y unas gotas de sebesa roja</p>
          </div>
      
        </div>
        <div className='item-b'>
          <div className='txt-b'>
            <h1 className='-h1b'>Lomi lomi morti morti </h1>
            <p className='-pb'>sanguche de lomito completo con jamon queso huevo lechuga y tomate, ademas ¡MORTADELA!</p>
          </div>
          <img className='img-b' src={morti} alt='Sandwich de Mila'/>
        </div>
      
    </div>
  );
}

export default Catalogo;