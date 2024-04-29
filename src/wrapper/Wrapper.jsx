import React from 'react'
import './wrapper.css'
import GalienCoin from './galiencoin.png'
import Flappy from '../flappy/Flappy'
import { store, updateFrame, birdjump, game, states, rungame } from '../store/store'


function Wrapper() {
    return (
        <div className="wrapper">
            <div className='section_hero'>
                <div className='block_chara'>
                    <img src='https://storage.googleapis.com/galiens/Alien1.png' className='galien'></img>
                </div>
                <div className='block_logo'>
                    <div className='titleContainer'>
                        <img src='https://storage.googleapis.com/galiens/Galien%20Coin.png' className='galienCoin' alt="Alien Fumeta" />
                        <span className='coinTitle'>GALIENS</span>
                    </div>
                    <div>
                        <Flappy store={store} updateFrame={updateFrame} game={game}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

function onpress(evt) {

    switch (game.currentstate) {
    default:
    case states.Splash:
      rungame()
      birdjump(store.bird)
      break
    case states.Game:
      birdjump(store.bird)
      break
    case states.Score:
      break
  }

}

document.addEventListener('mousedown', onpress);

export default Wrapper