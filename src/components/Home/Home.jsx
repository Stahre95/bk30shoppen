import React from 'react'
import "../Home/style.css"
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();

  return (
    <div>
      <div className="background-image">
        <h1 className='header-title'>VÄSTERÅS BK30<br /><span>Webbshop</span></h1>
      </div>
      <div className="grid-container">
        <div className="first-column">
          <div className="column box-klader" onClick={() => {
            navigate("/klader");
          }}><p className='category-title'>KLÄDER</p></div>
        </div>
        <div className="second-column">
          <div className="column box-sovenir" onClick={() => {
            navigate("/souvenir");
          }}><p className='category-title'>SOUVENIR</p></div>
        </div>
        <div className="third-column">
          <div className="column box-ovrigt" onClick={() => {
            navigate("/ovrigt");
          }}><p className='category-title'>ÖVRIGT</p></div>
        </div>
      </div>
      </div>
      )
}

      export default Home


/*
<div className="column box-klader" onClick={() => {
          navigate("/klader");
        }}><p className='category-title'>KLÄDER</p></div>
        <div className="column box-sovenir" onClick={() => {
          navigate("/souvenir");
        }}><p className='category-title'>SOUVENIR</p></div>
        <div className="column box-ovrigt" onClick={() => {
          navigate("/ovrigt");
        }}><p className='category-title'>ÖVRIGT</p></div>
        */