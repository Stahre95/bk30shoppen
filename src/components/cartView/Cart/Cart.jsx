import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'
import React, { useEffect } from 'react'

import useStyles from './styles';


function Cart({ item, removeFromCart, updateQuantity}) {
    const classes = useStyles();
    return (
        <Card>
            <CardContent className={classes.cardContent}>
                <Typography variant="underline">{item.name}</Typography>
                <Typography variant="underline">{item.line_total.formatted_with_code}</Typography>
            </CardContent>
            <CardActions className={classes.CardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={() => removeFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default Cart