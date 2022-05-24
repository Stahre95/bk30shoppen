import React from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

//components
import CustomTextField from './CustomTextField';

function AdressForm() {
    const methods = useForm();
  return (
    <>
        <Typography variant="h6" gutterBottom>Leverans Adress</Typography>
        <FormProvider {...methods}>
            <form onSubmit="">
                <Grid container spacing={3}>
                    <CustomTextField required name="firstName" label='Förnamn' />
                    <CustomTextField required name="lastName" label='Efternamn' />
                    <CustomTextField required name="Adress" label='Address' />
                    <CustomTextField required name="email " label='Email' />
                    <CustomTextField required name="city" label='Stad' />
                    <CustomTextField required name="zip" label='postnummer' />
                </Grid>
            </form>
        </FormProvider>
    </>
  )
}

export default AdressForm