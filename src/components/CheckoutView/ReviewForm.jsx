import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

function ReviewForm({ receiptId }) {
  return (
    <>
        <Typography variant="h6" gutterBottom>Order sammanfattning</Typography>
        <List disablePadding>
            {receiptId.live.line_items.map(product => (
                <ListItem style={{padding: '10px 0'}} key={product.name}>
                    <ListItemText primary={product.name} secondary={`Antal: ${product.quantity}`} />
                    <Typography variant="body2">{product.line_total.formatted_with_code}</Typography>
                </ListItem>
            ))}
            <ListItem style={{padding: '10px 0'}}>
                <ListItemText primary="Total" />
                <Typography variant="subtitle1" style={{ fontWeight: 700}}>
                    {receiptId.live.subtotal.formatted_with_code}
                </Typography>
            </ListItem>
        </List>
    </>
  )
}

export default ReviewForm