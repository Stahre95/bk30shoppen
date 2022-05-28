import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import useStyles from './styles';

function Product({data, product, addToCart}) {
  const classes = useStyles();

   if(product.categories[0].name === "Klader" && data.h1 === "KLÄDER") {
    return (
      <Card className ={classes.root}>
      <CardMedia 
        className={classes.media}
        component="img"
        height="260px"
        image={product.image.url}
        alt="image of BK30 Hoodie"
       />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="overline">
              {product.name}
          </Typography>
          <Typography variant="overline">
              {product.price.formatted_with_code}
          </Typography>
        </div>
      </CardContent>
      <CardActions  className={classes.cardActions}>
        <Button size="small" variant="contained" color="primary" fullWidth onClick={() => addToCart(product.id, 1)}>Lägg i varukorg</Button>
      </CardActions>
  </Card>
    )
  } else if(product.categories[0].name === "souvenir" && data.h1 === "SOUVENIR") {
    console.log(product.id)
    return (
      <Card className ={classes.root}>
      <CardMedia 
        className={classes.media}
        component="img"
        image={product.image.url}
        alt="image of BK30 Hoodie"
       />
      <CardContent>
      <div className={classes.cardContent}>
          <Typography variant="overline">
              {product.name}
          </Typography>
          <Typography variant="overline">
              {product.price.formatted_with_code}
          </Typography>
        </div>
      </CardContent>
      <CardActions  className={classes.cardActions}>
        <Button size="small" variant="contained" color="primary" fullWidth onClick={() => addToCart(product.id, 1)}>Lägg i varukorg</Button>
      </CardActions>
  </Card>
    )
  } else if(product.categories[0].name === "Ovrigt" && data.h1 === "ÖVRIGT") {
    return (
      <Card className ={classes.root}>
      <CardMedia 
        className={classes.media}
        component="img"
        image={product.image.url}
        alt="image of BK30 Hoodie"
       />
      <CardContent>
      <div className={classes.cardContent}>
          <Typography variant="overline">
              {product.name}
          </Typography>
          <Typography variant="overline">
              {product.price.formatted_with_code}
          </Typography>
        </div>
      </CardContent>
      <CardActions  className={classes.cardActions}>
        <Button size="small" variant="contained" color="primary" fullWidth onClick={() => addToCart(product.id, 1)}>Lägg i varukorg</Button>
      </CardActions>
  </Card>
    )
  } 
  
}

export default Product