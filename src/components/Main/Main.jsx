import React from 'react'

import Header from '../Header/Header'
import Products from '../Products/Products'

function Main({data, name, products, addToCart}) {


  return (
    <>
    <Header data={data[name].Header}/>
    <Products products={products} data={data[name]} addToCart={addToCart}/>
    </>
  )
}

export default Main