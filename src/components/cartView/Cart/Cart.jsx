import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'
import React, { useEffect } from 'react'


function Cart({ item, removeFromCart, updateQuantity}) {
    return (
        <Card>
            <CardMedia image={item.image.url} alt={item.name} className="media" />
            <CardContent className="cardContent">
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_code}</Typography>
            </CardContent>
            <CardActions className="cardActions">
                <div className="buit">
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