import React from 'react'
import "../Home/style.css"
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();

  return (
    <div className='main-content'>
      <div className="background-image">
        <h1 className='header-title'>VÄSTERÅS BK30<br /><span>Webbshop</span></h1>
      </div>
      <div className="distance"></div>
      <div className="grid">
        <div className="column box-klader" onClick={() => {
          navigate("/klader");
        }}><p className='category-title'>KLÄDER</p></div>
        <div className="column box-sovenir" onClick={() => {
          navigate("/souvenir");
        }}><p className='category-title'>SOUVENIR</p></div>
        <div className="column box-ovrigt" onClick={() => {
          navigate("/ovrigt");
        }}><p className='category-title'>ÖVRIGT</p></div>
      </div>
      <div className="distance"></div>
    </div>
  )
}

export default Home