import React from 'react'

import Header from '../Header/Header'
import Products from '../Products/Products'

function Main({data, name}) {
  return (
    <>
    <Header data={data[name].Header}/>
    <Products data={data[name].articles}/>
    </>
  )
}

export default Main