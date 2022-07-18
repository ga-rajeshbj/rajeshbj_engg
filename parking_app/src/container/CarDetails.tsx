import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from "react-hook-form"
import * as yup from "yup";
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from "react-redux";

import { Button } from '@mui/material';
import { RootState } from '../redux/rootReducer';
import "./styles/carDetails.scss"

const schema = yup.object({
    carNumber: yup.string().required(),

}).required();





const CarDetails = () => {



    const dispatch = useDispatch();
    // const loadingData = useSelector((state: RootState) => state.reducer.loading);

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })




    const onsubmit = (data: any) => {





    }
    return (
        <div className='container'>
            <h1>Enter Car Details</h1>
            <form onSubmit={handleSubmit(onsubmit)}>

                <div className='formContainer'>

                    <Controller defaultValue={''} control={control} name="carNumber" render={({ field }: any) => <TextField {...field} id="standard-basic" label="Enter Car Number" variant="standard" />} />

                    <Button type="submit" variant="contained">Contained</Button>
                </div>
            </form>

        </div>
    );
};

export default CarDetails;