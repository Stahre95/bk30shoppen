import React, { useEffect } from 'react';
import {Grid} from '@material-ui/core';

import Product from '../Product/Product';
import '../Products/style.css'

function Products({data}) {
  useEffect(() => {
    console.log(data)
  })
  return (
    <main className='content'>
      <Grid container justify="center" spacing={5}>
        {data.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product}/>
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products;