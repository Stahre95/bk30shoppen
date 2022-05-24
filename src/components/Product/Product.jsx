import React, { useEffect } from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'


function Product({data, product}) {
   {if(product.categories[0].name == "Klader" && data.h1 == "KLÄDER") {
    return (
      <Card className ="root">
      <CardMedia 
        className="media"
        component="img"
        height="100%"
        image={product.image.url}
        alt="image of BK30 Hoodie"
       />
      <CardContent>
        <div className="cardContent">
          <Typography variant="h5" gutterBottom>
              {product.name}
          </Typography>
          <Typography variant="h5">
              {product.price.formatted_with_code}
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
  } else if(product.categories[0].name == "souvenir" && data.h1 == "SOUVENIR") {
    return (
      <Card className ="root">
      <CardMedia 
        className="media"
        component="img"
        height="100%"
        image={product.image.url}
        alt="image of BK30 Hoodie"
       />
      <CardContent>
        <div className="cardContent">
          <Typography variant="h5" gutterBottom>
              {product.name}
          </Typography>
          <Typography variant="h5">
              {product.price.formatted_with_code}
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
  } else if(product.categories[0].name == "Ovrigt" && data.h1 == "ÖVRIGT") {
    return (
      <Card className ="root">
      <CardMedia 
        className="media"
        component="img"
        height="100%"
        image={product.image.url}
        alt="image of BK30 Hoodie"
       />
      <CardContent>
        <div className="cardContent">
          <Typography variant="h5" gutterBottom>
              {product.name}
          </Typography>
          <Typography variant="h5">
              {product.price.formatted_with_code}
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
  }} 
  
}

export default Product