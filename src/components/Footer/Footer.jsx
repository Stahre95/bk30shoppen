import React from 'react'
import {Typography } from '@material-ui/core'

import '../Footer/style.css'

function Footer() {
  return (
    <div className="static">
      <div className='container'>
       <div className="leftColumn">
          <Typography variant="subtitle2" color='inherit'>Kontakt</Typography>
          <Typography variant="subtitle2" color='inherit'>021-41 51 20</Typography>
          <Typography variant="subtitle2" color='inherit'>info@bk30.se</Typography>
       </div>
       <div className="middleColumn">
          <Typography variant="body2">&copy;Västerås BK30 Webbshop 2022</Typography> 
       </div>
       <div className="rightColumn">
         <Typography variant="subtitle2" color='inherit'>www.bk30.se</Typography>
       </div>
    </div>
    </div>
  )
}

export default Footer