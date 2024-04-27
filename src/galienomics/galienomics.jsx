import React from 'react'
import Stadistics from './stadistics.png'
import './galienomics.css'

function Galienomics() {
    return (
        <div className="section_galienomics" id='galienomics'>
            <h1 className='galienomicsTitle'>Galienomics</h1>
            <img src={Stadistics} style={{padding:"25px", width:"80%", maxWidth:"800px"}}></img>
        </div>
    )
}

export default Galienomics
