import React, {useState, useReducer, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Heading} from "@chakra-ui/react";

import {fetchAPI, submitAPI} from './Api'

import BookingForm from './BookingForm'
import AltBookingForm from './AltBookingForm.js'

import {Sub, cardTitle, P} from './../styles/components';

export function initializeTimes() {
    const date = new Date();
    const initialTimes = fetchAPI(date); // should take todays date
    return initialTimes;
}

export function updateTimes(availableTimes, newSelectedDate) {
    // Get the available times for the selected day
    const updatedTimes = fetchAPI(newSelectedDate);

    // Return the updated state
    return updatedTimes;
}

// function updateTimes(state, selectedDate) {
//     // Get the day of the week for the selected date
//     const selectedDay = new Date(selectedDate).getDay();

//     // Define the available times for each day of the week
//     const availableTimesByDay = {
//         0: [], // Sunday
//         1: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'], // Monday
//         2: ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM'], // Tuesday
//         3: ['11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'], // Wednesday
//         4: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'], // Thursday
//         5: ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'], // Friday
//         6: [], // Saturday
//     };

//     // Get the available times for the selected day
//     const availableTimes = availableTimesByDay[selectedDay];

//     // Return the updated state
//     return availableTimes;
// }

    // function initializeTimes() {
    //     const availableTimes = [
    //       '9:00 AM',
    //       '10:00 AM',
    //       '11:00 AM',
    //       '12:00 PM',
    //       '1:00 PM',
    //       '2:00 PM',
    //       '3:00 PM',
    //       '4:00 PM',
    //       '5:00 PM',
    //     ];
    //     return availableTimes;
    // }


export default function Booking() {
    const [form, setForm] = useState({
        date: '',
        time: '',
        guests: '',
        occasion: '',
    });

    useEffect(() => {
        localStorage.setItem('form', JSON.stringify(form));
    }, [form]);

    const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

    const navigate = useNavigate();

    function submitForm(e){
        // e.preventDefault();
        console.log(form);
        const isTrue = submitAPI(form);
        if (isTrue){
            navigate('/confirmed')
        }
    }

    return(
        <Box
        justifyContent="center"
        alignItems="center"
        backgroundColor="green"
        color='white'
        paddingTop={10}
        >
            <AltBookingForm form={form} setForm={setForm} availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
        </Box>
    )
};