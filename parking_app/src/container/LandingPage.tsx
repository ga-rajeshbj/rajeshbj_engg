import React from 'react';
import { useForm, Controller } from "react-hook-form"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./styles/landingPage.scss"
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import {
    carDetails,
    parkingLotNumber,
} from "../redux/actions/carDetails"

import { RootState } from '../redux/rootReducer';

const schema = yup.object({
    spaces: yup.number().positive().integer().required(),
}).required();


const LandingPage = () => {
    let navigate = useNavigate();

    const dispatch = useDispatch();
    const loadingData = useSelector((state: RootState) => state.carDetailsReducer);




    const { handleSubmit, control, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onsubmit = (data: any) => {



        navigate("parkspaces")

        dispatch(parkingLotNumber(data.spaces))

    }
    return (
        <div className='landingPageContainer'>
            <h1>Enter the spaces</h1>
            <form onSubmit={handleSubmit(onsubmit)}>

                <div className='formContainer'>
                    <div className='inputFeild'>

                        <Controller
                            name="spaces"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <TextField {...field} id="standard-basic" label="Enter Spaces" variant="standard" />}
                        />


                        <span className='errorMessage'>{errors.spaces && errors.spaces.message}</span>

                    </div>

                    <Button type="submit" variant="contained">SubMit Slots</Button>
                </div>
            </form>
        </div>
    );
};

export default LandingPage;