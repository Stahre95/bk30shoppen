import React from 'react'
import Header from '../Header/Header'
import Cart from './Cart/Cart'
import { Container, Typography, Button, Grid, CssBaseline} from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';

function CartView({data, name, cart, updateQuantity, removeFromCart, emptyCart }) {
    const classes = useStyles();

    const EmptyCart = () => (
       <div className={classes.emptyContainer}>
        <Typography className={classes.emptyCart} variant="subtitle1">Du har inga artiklar i din varukorg, börja med att lägga till några!</Typography>
        <Button component={Link} to="/" className={classes.emptyButton} size="medium" type="button" variant="contained" color="primary" align="center">Hem</Button>
       </div>
    );
    
    const ItemsInCart = () => (
        <>
            <Grid container spacing={2}>
                {cart.line_items.map((item) => (
                    <Grid item sm={6} key={item.id}>
                        <Cart item={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart}/>
                    </Grid>
                ))}
            </Grid>

            <div className={classes.cardDetails}>
                <Typography variant="h5">total: {cart.subtotal.formatted_with_code}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="medium" type="button" variant="contained" color="secondary" onClick={() => emptyCart()}>Töm varukorgen</Button>
                    <Button component={Link} to="/utcheckning" className={classes.checkoutButton} size="medium" type="button" variant="contained" color="primary">Till utcheckning</Button>
                </div>
            </div>
        </>
    )

  if(!cart.line_items) return 'Loading ...';
  return (
        <>
        <CssBaseline />
        <Header data={data[name].Header}/>
        <Container className={classes.container}>
            {!cart.line_items.length ? <EmptyCart /> : <ItemsInCart />}
        </Container>
        </>
  )
}

export default CartView