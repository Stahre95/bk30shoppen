import React from 'react'
import { Typography, Button, Divider } from '@material-ui/core'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';



//component
import ReviewForm from './ReviewForm'

function PaymentForm({prevStep, receiptId, shippingData, handleCheckout, nextStep, timeout}) {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY)

  const submitHandle = async (event, elements, stripe) => {
      event.preventDefault();

      if(!stripe || !elements) return;

      const cardElement = elements.getElement(CardElement);

      const {error, paymentMethod } = await stripe.createPaymentMethod( { type: 'card', card: cardElement });

      if(error) {
        console.log(error)
      } else {
          console.log(shippingData)
          const orderDetails = {
            items: receiptId.live.line_items,
            customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email},
            shipping: { name: "Inrikes", street: shippingData.Adress, town_city: shippingData.city, county: shippingData.shippingSubDivision, postalCode: shippingData.zip, country: shippingData.shippingCountry},
            fullfillment: { shipping_method: shippingData.shippingOption },
            payment: {
              gateway: 'stripe',
              stripe: {
                payment_method_id: paymentMethod.id
              }
            }
          }


         console.log(orderDetails)
    
          handleCheckout(receiptId.id, orderDetails);
          timeout();
          nextStep();
      }
  }

  return (
    <>
      <ReviewForm receiptId={receiptId} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: '20px 0'}}>Betalningsmetod</Typography>
      <Elements stripe={stripePromise}>
          <ElementsConsumer>
            {({ elements, stripe}) => (
              <form onSubmit={(e) => submitHandle(e, elements, stripe)}>
                <CardElement />
                <br /> <br />
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                  <Button variant="outlined" onClick={prevStep}>Tillbaka</Button>
                  <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                    Betala { receiptId.live.subtotal.formatted_with_code }
                  </Button>
                </div>
              </form>
            )}
          </ElementsConsumer>
      </Elements>
    </>
  )
}

export default PaymentForm