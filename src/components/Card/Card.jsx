import equilibrium from './image/image-equilibrium.jpg';
import avatar from './image/image-avatar.png';
import eth from './image/icon-ethereum.svg';
import clock from './image/icon-clock.svg';
import eye from './image/icon-view.svg';

export default function Card() {
  return (
    <div className='card'>

      <div className='equilibrium'>

        <span className='img-wrapper'>
          <img src={equilibrium} alt="" />
        </span>

        <div className='view-icon-wrapper'>
          <img src={eye} alt="" className='view-icon'/>
        </div>

      </div>

      <h1>Equilibrium #3429</h1>
      <p>Our equilibrium collection promotes balance and calm.</p>

      <span className='price-time'>
        <div>
          <img src={eth} alt="" />
          <h2>0.041ETH</h2>
        </div>
        <div>
          <img src={clock} alt="" />
          <p>3 days left</p>
        </div>
      </span>

      <span className='sign'>
        <img src={avatar} alt="" />
        <p>Creation of <b>Jules Wyvern</b></p>
      </span>

    </div>
  )
}
