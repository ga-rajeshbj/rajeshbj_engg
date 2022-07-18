import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../redux/rootReducer';
import "./styles/ParkSpots.scss"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Card, CardActions, CardContent, TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from "react-hook-form"
import * as yup from "yup";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const schema = yup.object({
    carNumber: yup.string().required(),

}).required();


const ParkSpots = () => {
    const [open, setOpen] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);

    const [enterTime, setEnterTime] = useState<any>("")
    const [parkTime, setParkTime] = useState<any>("")
    const [parkingSlots, setParkingSlots] = useState<any>([])
    const [allocatedSlots, setAllocatedSlots] = useState<any>([])


    const [exit, setExit] = useState<any>("")
    const [parkingCharge, setParkingCharge] = useState<any>(0)

    const handleOpen = () => {

        setOpen(true)
        let enterTime = new Date()
        let hour = enterTime.getHours()
        let sec = enterTime.getSeconds()
        let minute = enterTime.getMinutes()

        let curTime = enterTime.getHours() * 3600 + enterTime.getMinutes() * 60 + enterTime.getSeconds();
        setParkTime(curTime)
        setEnterTime(`${hour}: ${minute}`)
    };
    const handleClose = () => setOpen(false);

    const parkingSlotsNum = useSelector((state: RootState) => state.carDetailsReducer.parkinglotNumber);

    let navigate = useNavigate();


    useEffect(() => {

        const createParkingSlots = () => {

            let spacenumber = Number(parkingSlotsNum)
            let totalParkingSlots: any = []

            for (let i = 1; i <= spacenumber; i++) {
                totalParkingSlots.push(i)

                setParkingSlots((currrent: any) => [...currrent, { num: i, isparked: false, carNum: "" }])
            }

            return totalParkingSlots

        }

        createParkingSlots()


        return () => {
            setParkingSlots([])
        }



    }, [])




    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })




    const onsubmit = (data: any) => {


        let number: any = 0


        // let allocatedParking = parkingSlots.map((item: any, index: any) => {

        //     if (item.isparked === false) {
        //         return item.num
        //     } else {
        //         return item
        //     }



        // })

        let allocatedParking: any = []

        for (let i = 0; i < parkingSlots.length; i++) {

            if (parkingSlots[i].isparked === false) {

                allocatedParking.push(parkingSlots[i].num);
            }

        }

        // let allocatedParking:any[]=[]

        // for (let i = 1; i < allocatedParking.length; i++) {
        //     allocatedParking.push(i)

        // }
        if (allocatedParking.length <= 0) {
            alert("parking slot is full")
        } else {

            console.log("allocatedparking leth and array", allocatedParking.length, allocatedParking)
            let randomNum = Math.floor(Math.random() * allocatedParking.length)

            let randomParkingSlot = allocatedParking[randomNum]
            console.log("random number parking slot", randomNum, randomParkingSlot)


            setParkingSlots(parkingSlots.map((item: any, index: any) => {
                if (index + 1 == randomParkingSlot) {

                    return {

                        ...item,
                        isparked: true,
                        carNum: data.carNumber,
                        parkTime: parkTime
                    }
                }
                else {
                    return item
                }
            }))
        }






        handleClose()


    }



    const handleExitCar = (item: any) => {
        setExit(item.num)
        console.log(item)
        handleOpenTwo()

        const today = new Date(),
            curTime = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();

        const parkHour = Number(curTime) - Number(item.parkTime);
        console.log(item.parkTime)
        console.log(Number(curTime) - Number(item.parkTime))

        let hours = Math.floor(parkHour / 3600); // get hours
        let minutes = Math.floor((parkHour - (hours * 3600)) / 60); // get minutes
        let seconds = parkHour - (hours * 3600) - (minutes * 60); //  get seconds
        // add 0 if value < 10; Example: 2 => 02
        if (hours < 10) { hours = hours; }
        if (minutes < 10) { minutes = minutes; }
        if (seconds < 10) { seconds = seconds; }
        console.log(hours + ':' + minutes + ':' + seconds); // Return is HH : MM : SS
        let parkCharge: number;
        if (hours <= 2) {
            if (hours === 2) {
                if (minutes === 0 && seconds == 0) {
                    parkCharge = 10
                }
                else {
                    parkCharge = 20
                }
            }
            else {
                parkCharge = 10
            }
        }
        else {
            parkCharge = (hours * 10) - 10;
        }
        // alert(parkCharge)
        setParkingCharge(parkCharge)
    }
    const handleOpenTwo = () => {
        setOpenTwo(true)
    }
    const handleCloseTwo = () => {
        setOpenTwo(false)
    }

    const handlePayment = () => {


        setParkingSlots(parkingSlots.map((item: any, index: any) => {

            console.log(item, exit)
            if ((item?.num) == exit) {
                return {

                    ...item,
                    isparked: false,

                }
            }
            else {
                return item
            }

        }))

        handleCloseTwo()
    }
    return (
        <>
            < div className='parkSpaceContainer' >


                {
                    parkingSlots.map((item: any) => {
                        return (






                            <Card sx={{ minWidth: 275 }} className='parkSpotContainer'>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14, textAlign: "center" }} color="text.secondary" gutterBottom>
                                        parking Number :{item.num}
                                    </Typography>
                                </CardContent>
                                {item.isparked &&
                                    <CardContent>
                                        <Typography variant="h5" component="div" sx={{ fontSize: 19, textAlign: "center" }}>
                                            CAR NUMBER: {item.carNum}
                                        </Typography>



                                        <CardActions sx={{ display: "flex", justifyContent: "center" }} >
                                            <Button size="small" variant='contained' onClick={() => handleExitCar(item)}>Exit car</Button>
                                        </CardActions></CardContent>
                                }
                            </Card>
                        )
                    })
                }




            </div >
            <Button onClick={handleOpen} variant="contained" >Enter Car Detials</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='container'>
                        <h1>Enter Car Details</h1>
                        <form onSubmit={handleSubmit(onsubmit)}>

                            <div className='formContainer'>

                                <Controller defaultValue={''} control={control} name="carNumber" render={({ field }: any) => <TextField {...field} id="standard-basic" label="Enter Car Number" variant="standard" />} />

                                <Button type="submit" variant="contained">give the parking slot</Button>
                            </div>
                        </form>

                        <h1>Enter Time {enterTime} </h1>

                    </div>
                </Box>
            </Modal>


            <Modal
                open={openTwo}
                onClose={handleCloseTwo}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='container'>
                        <h1>parking charge {parkingCharge}</h1>

                        <Button variant="contained" onClick={handlePayment} sx={{ m: 2 }}>Payment taken</Button>
                        <Button variant="contained" onClick={handleCloseTwo}>Back</Button>
                    </div>
                </Box>
            </Modal>
        </>

    );
};

export default ParkSpots;


// if(allocatedSlots.indexOf(randomNum) >-1){

// } else{

//     setAllocatedSlots([...allocatedSlots, randomNum])        
// }