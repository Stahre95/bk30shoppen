import React from 'react'
import './style.css'


function Header({data}) {
  return (
    <div className='header-content'>
        <h1>{data.h1}</h1>
      </div>
  )
}

export default Header