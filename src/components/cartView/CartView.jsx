import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Cart from './Cart/Cart'
import { Container, Typography, Button, Grid} from '@material-ui/core';
import { Link } from 'react-router-dom';

function CartView({data, name, cart, updateQuantity, removeFromCart, emptyCart }) {
   

    const EmptyCart = () => (
        <Typography variant="subtitle1">Du har inga artiklar i din varukorg, börja med att lägga till några!</Typography>
    );
    
    const ItemsInCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <Cart item={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className="cardDetails">
                <Typography variant="h4">total: {cart.subtotal.formatted_with_code}</Typography>
                <div>
                    <Button className="emptyButton" size="large" type="button" variant="contained" color="secondary" onClick={() => emptyCart()}>Töm varukorgen</Button>
                    <Button component={Link} to="/utcheckning" className="emptyButton" size="large" type="button" variant="contained" color="primary">Till utcheckning</Button>
                </div>
            </div>
        </>
    )

  if(!cart.line_items) return 'Loading ...';
  return (
        <Container>
            <Header data={data[name].Header}/>
            <Typography className="title" variant="h3" gutterBottom>Din Varukorg</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <ItemsInCart />}
        </Container>
  )
}

export default CartView