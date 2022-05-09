import React, { useEffect } from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'


function Product({product}) {
  
  return (
    <Card className ="root">
        <CardMedia 
          className="media"
          component="img"
          height="100%"
          image={product.imageUrl}
          alt="image of BK30 Hoodie"
         />
        <CardContent>
          <div className="cardContent">
            <Typography variant="h5" gutterBottom>
                {product.name}
            </Typography>
            <Typography variant="h5">
                {product.price}
            </Typography>
          </div>
        </CardContent>
        <CardActions disableSpacing className="cardActions">
          <IconButton aria-label="Add to Cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product