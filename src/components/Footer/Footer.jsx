import React from 'react'
import {Typography } from '@material-ui/core'

import '../Footer/style.css'

function Footer() {
  return (
    <div className="static">
      <div className='container'>
       <div className="leftColumn">
          <p>Kontakt</p>
          <p>021-41 51 20</p>
          <p>info@bk30.se</p>
       </div>
       <div className="middleColumn">
          <p>&copy;Västerås BK30 Webbshop 2022</p> 
       </div>
       <div className="rightColumn">
         <p>www.bk30.se</p>
       </div>
    </div>
    </div>
  )
}

export default Footer