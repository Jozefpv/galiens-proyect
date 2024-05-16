import React from 'react'
import './wrapper.css'
import Flappy from '../flappy/Flappy'
import { store, updateFrame, birdjump, game, states, rungame } from '../store/store'
import Snowfall from 'react-snowfall';


function Wrapper() {

    const snowflake1 = document.createElement('img')
    snowflake1.src = "https://cdn.discordapp.com/attachments/315600040968060929/1240779352954638436/Untitled_Artwork_1.png?ex=6647cd52&is=66467bd2&hm=55502379f608b28724c6c41c3d4500cc5443baf44be9d4776709334a2c4bb7df&"
    const snowflake2 = document.createElement('img')
    snowflake2.src = "https://cdn.discordapp.com/attachments/315600040968060929/1240779352954638436/Untitled_Artwork_1.png?ex=6647cd52&is=66467bd2&hm=55502379f608b28724c6c41c3d4500cc5443baf44be9d4776709334a2c4bb7df&"
  
    const images = [snowflake1, snowflake2]
    return (
        <div className="wrapper">
            <div className='snow'>
                <Snowfall
                    style={{ backgroundColor: "transparent"}}
                    snowflakeCount={10}
                    images={images}
                    radius={[50, 180.0]}
                />
            </div>
            <div className='section_hero'>
                <div className='block_chara'>
                    <img src="https://cdn.discordapp.com/attachments/315600040968060929/1240779830216101969/COIN_PNG_1.png?ex=6647cdc4&is=66467c44&hm=5aee87b105de4471cec8ff8df42b4cf00865d59dbea21163082e0daa16d83336&" className='galien'></img>
                </div>
                <div className='block_logo'>
                    <div className='titleContainer'>
                        <img src="https://cdn.discordapp.com/attachments/315600040968060929/1240779830216101969/COIN_PNG_1.png?ex=6647cdc4&is=66467c44&hm=5aee87b105de4471cec8ff8df42b4cf00865d59dbea21163082e0daa16d83336&" className='galienCoin' alt="Alien Fumeta" />
                        <span className='coinTitle'>BITcoin</span>
                    </div>
                    <div>
                        <Flappy store={store} updateFrame={updateFrame} game={game} />
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