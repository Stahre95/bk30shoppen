import React, { useEffect, useState } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { commerce } from '../../lib/commerce/commerce.js'

//component
import Header from '../Header/Header';
import AdressForm from './AdressForm';
import PaymentForm from './PaymentForm';

function Checkout({data, name, cart, order, onCaptureCheckout, error}) {
    const [activeStep, setActivestep] = useState(0);
    const [receiptId, setReceiptId] = useState(null);
    const [shippingData, setShippingData] = useState({})
    const steps = ['Leveranssätt', 'Betalning'];

    useEffect(() => {
        const generateReceiptId = async () => {
            try {
                const receipt = await commerce.checkout.generateToken(cart.id, {type: 'cart' });
                setReceiptId(receipt);
            } catch (error) {

            }
        }

        generateReceiptId();
    }, [cart])

    const next = (data) => {
        setShippingData(data);
        nextStep();
    }

    const nextStep = () => setActivestep((prevActiveStep) => prevActiveStep + 1)
    const prevStep = () => setActivestep((prevActiveStep) => prevActiveStep - 1)

    
    
    //confirmation of purchase view
    const Confirmation = () => (
        <div>confirmation</div>
    )

    //Adress & Payment information forms
    const Form = () => activeStep === 0
        ? <AdressForm nextStep={nextStep} receiptId={receiptId} next={next}/>
        : <PaymentForm nextStep={nextStep} prevStep={prevStep} receiptId={receiptId} shippingData={shippingData} onCaptureCheckout={handleCheckout}/>

  return (
    <>
        <Header data={data[name].Header}/>
        <main className="layout">
            <Paper className="paper">
                <Stepper activeStep={activeStep} className="stepper">
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation /> : receiptId  && <Form />}
            </Paper>
        </main>
        
    </>
  )
}

export default Checkout