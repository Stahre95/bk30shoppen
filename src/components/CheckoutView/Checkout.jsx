import React, { useEffect, useState } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';

//component
import Header from '../Header/Header';
import AdressForm from './AdressForm';
import PaymentForm from './PaymentForm';
function Checkout({data, name}) {
    const [activeStep, setActivestep] = useState(0);
    const steps = ['Shipping adress', 'Payment details'];

    const Confirmation = () => (
        <div>confirmation</div>
    )

    const Form = () => activeStep === 0
        ? <AdressForm />
        : <PaymentForm />

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
                {activeStep === steps.length ? <Confirmation /> : <Form />}
            </Paper>
        </main>
        
    </>
  )
}

export default Checkout