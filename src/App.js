import React from 'react'
import Wrapper from './wrapper/Wrapper';
import Navbar from './navbar/navbar'
import Snowfall from 'react-snowfall';
import Coin from './galiencoin.png'
import Separator from './separator/separator'
import About from './about/about'
import Ranking from './ranking/ranking'

import './App.css'

function App() {

  const snowflake1 = document.createElement('img')
  snowflake1.src = Coin
  const snowflake2 = document.createElement('img')
  snowflake2.src = Coin

  const images = [snowflake1, snowflake2]


  return (
    <div>
      <div className='snow'>
      <Snowfall
          style={{ background: "transparent" }}
          snowflakeCount={50}
          images={images}
          radius={[0.5, 80.0]}
        />
      </div>
      <div className='background'>
      </div>
      <div style={{ zIndex: "10" }}>
        <Navbar />
        <Wrapper />
        <Separator/>
        <About/>
        <Separator/>
        <Ranking/>
        <Separator/>
      </div>
    </div>
  )
}

export default App