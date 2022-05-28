import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline } from '@material-ui/core';
import { commerce } from '../../lib/commerce/commerce.js'

//component
import Header from '../Header/Header';
import AdressForm from './AdressForm';
import PaymentForm from './PaymentForm';

function Checkout({data, name, cart, order, handleCheckout, error}) {
    const [activeStep, setActivestep] = useState(0);
    const [receiptId, setReceiptId] = useState(null);
    const [shippingData, setShippingData] = useState({})
    const [isFinished, setIsFinished] = useState(false)
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

    
    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true)
        }, 3000)
    }

    //confirmation of purchase view
    const Confirmation = () => order.customer ? (
        <>
            <div>
                <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname} </Typography>
                <Divider className="divider" />
                <Typography variant="subtitle2">Order ref: {order.customer.reference}</Typography>
            </div>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button">Tillbaka till startsidan</Button>
        </>
    ) : isFinished ? ( 
        //display confirmation view for testing purposes only
        <>
        <div>
            <Typography variant="h5">Thank you for your purchase</Typography>
            <Divider className="divider" />
            <Typography variant="subtitle2">Order ref: test order </Typography>
        </div>
        <br />
        <Button component={Link} to="/" variant="outlined" type="button">Tillbaka till startsidan</Button>
        </>
    ) : (
        <div className="spinner">
            <CircularProgress />
        </div>
    )
        
    

    //Adress & Payment information forms
    const Form = () => activeStep === 0
        ? <AdressForm nextStep={nextStep} receiptId={receiptId} next={next}/>
        : <PaymentForm nextStep={nextStep} prevStep={prevStep} receiptId={receiptId} shippingData={shippingData} handleCheckout={handleCheckout} timeout={timeout}/>

  return (
    <>
    <CssBaseline />
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