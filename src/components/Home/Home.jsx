import React from 'react'
import "../Home/style.css"

function Home() {
  return (
    <div className='main-content'>
        <div className="background-image">
            <h1 className='header-title'>VÄSTERÅS BK30<br /><span>Webbshop</span></h1>
        </div>
        <div className="distance"></div>
        <div className="grid">
            <div className="column box-klader"><p className='category-title'>KLÄDER</p></div>
            <div className="column box-sovenir"><p className='category-title'>SOUVENIR</p></div>
            <div className="column box-ovrigt"><p className='category-title'>ÖVRIGT</p></div>
        </div>
        <div className="distance"></div>
    </div>
  )
}

export default Home