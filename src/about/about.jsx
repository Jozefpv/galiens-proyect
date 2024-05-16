import React from 'react'
import Galien from './nave.png'
import './about.css'

function About() {
    return (
        <div className="section_about" id='about'>
            {/*<img src={Galien} className='cloud_right'></img>*/}
            <img src='https://cdn.discordapp.com/attachments/315600040968060929/1240779352954638436/Untitled_Artwork_1.png?ex=6647cd52&is=66467bd2&hm=55502379f608b28724c6c41c3d4500cc5443baf44be9d4776709334a2c4bb7df&' className='cloud_right'></img>
            <div className='section_block_about_wrapper'>
                <div className='block_about'>
                    <div className='title_paragraph'><span>About</span></div>
                    <div className='block_paragraph'>
                        <p className='para'>
                            <p style={{ display: 'block', paddingRight:"10px" }}>
                            Bitcoin was bitten. 

                            To be continued...
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About