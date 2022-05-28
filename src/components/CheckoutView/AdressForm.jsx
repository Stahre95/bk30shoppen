import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { commerce } from '../../lib/commerce/commerce.js';
//components
import CustomTextField from './CustomTextField';
import { Link } from 'react-router-dom';
import { Receipt } from '@material-ui/icons';

function AdressForm({ next, receiptId }) {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubDivisions, setShippingSubDivisions] = useState([]);
    const [shippingSubDivision, setShippingSubDivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    const methods = useForm();

    const shippingCountriesFetch = async (receiptId) => {
        const response = await commerce.services.localeListShippingCountries(receiptId);

        setShippingCountries(response.countries);
        setShippingCountry(Object.keys(response.countries)[0]);
    }

    const subDivisionsFetch = async (countryCode) => {
        const response = await commerce.services.localeListSubdivisions(countryCode);

        setShippingSubDivisions(response.subdivisions)

        setShippingSubDivision(Object.keys(response.subdivisions)[0])
    }

    const shippingOptionsFetch = async (receiptId, country, stateProvince = null) => {
        const options = await commerce.checkout.getShippingOptions(receiptId, { country, region: stateProvince });

        setShippingOptions(options)
        setShippingOption(options[0].id)
    }

    useEffect(() => {
        shippingCountriesFetch(receiptId.id);
    }, [])

    useEffect(() => {
        if (shippingCountry) subDivisionsFetch(shippingCountry);
    }, [shippingCountry]);

    useEffect(() => {
        if (shippingSubDivision) shippingOptionsFetch(receiptId.id, shippingCountry, shippingSubDivision);
    }, [shippingSubDivision]);
    return (
        <>
            <Typography variant="h6" gutterBottom>Leverans Adress</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubDivision, shippingOption }))}>
                    <Grid container spacing={3}>
                        <CustomTextField required name="firstName" label='Förnamn' />
                        <CustomTextField required name="lastName" label='Efternamn' />
                        <CustomTextField required name="Adress" label='Address' />
                        <CustomTextField required name="email" label='Email' />
                        <CustomTextField required name="city" label='Stad' />
                        <CustomTextField required name="zip" label='postnummer' />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Land</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                                {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Län</InputLabel>
                            <Select value={shippingSubDivision} fullWidth onChange={(e) => setShippingSubDivision(e.target.value)}>
                                {Object.entries(shippingSubDivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Leverans</InputLabel>
                            <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                                {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_code})` })).map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <br />
                    <div>
                        <Button component={Link} variant="outlined" to="/varukorg">Till varukorgen</Button>
                        <Button type="submit" variant="contained" color="primary">Nästa</Button>
                    </div>
                </form>
            </FormProvider>
        </>
    )
}

export default AdressForm