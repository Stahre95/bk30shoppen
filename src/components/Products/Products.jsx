import React, { useEffect } from 'react';
import {Grid} from '@material-ui/core';

import Product from '../Product/Product';
import useStyles from './styles';

function Products({data, products, addToCart}) {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Grid container justify="center" spacing={7}>
        {products.map((product) => (
          <Grid item key={product.id} xs={18} sm={12} md={6} lg={3}>
            <Product data={data.Header} product={product} addToCart={addToCart}/>
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products;