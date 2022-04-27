import React from 'react'


function Header({data}) {
  return (
    <div style={{
        paddingTop: '15em',
        textAlign: 'center',
        color: 'white',
      }}>
        <h1>{data.h1}</h1>
      </div>
  )
}

export default Header