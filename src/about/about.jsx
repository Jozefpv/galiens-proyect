import React from 'react'
import Galien from './nave.png'
import './about.css'

function About() {
    return (
        <div className="section_about" id='about'>
            {/*<img src={Galien} className='cloud_right'></img>*/}
            <img src='https://storage.googleapis.com/galiens/alien%20on%20space.png' className='cloud_right'></img>
            <div className='section_block_about_wrapper'>
                <div className='block_about'>
                    <div className='title_paragraph'><span>About</span></div>
                    <div className='block_paragraph'>
                        <p className='para'>
                            <p style={{ display: 'block', paddingRight:"10px" }}>
                                Inspired by the aliens of Toy Gory, $GALIEN symbolized their quest for a better place among the stars.

                                With a growing community, $GALIEN's popularity soared. Together, they spread the word, attracting supporters from across the galaxy.

                                Despite challenges, $GALIEN persevered. Through unity and determination, it became a beacon of innovation and hope in our world.

                                In the end, $GALIEN's journey wasn't just about a token—it was a testament to the power of community and imagination to reach for the stars.
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About