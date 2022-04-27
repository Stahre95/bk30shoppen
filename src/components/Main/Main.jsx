import React from 'react'

import Header from '../Header/Header'

function Main({data, name}) {
  return (
    <Header data={data[name].Header}/>
  )
}

export default Main