import React, {useState, useEffect} from 'react'
import {Button, VStack } from "@chakra-ui/react";
import {FormLabel, Input, Select } from "@chakra-ui/react";

import {cardTitle, P} from './../styles/components';


export default function Booking({form, setForm, availableTimes, dispatch, submitForm}) {
    const [selectedDate, setSelectedDate] = useState(null);

    const numGuests= [1,2,3,4,5,6,7,8,9,10]

    function fixDate(nums){
        var date = new Date(nums); // M-D-YYYY

		var d = date.getDate() + 1;
		var m = date.getMonth() + 1;
		var y = date.getFullYear();

		var dateString = (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d) + '-' + y;
        return dateString
    }

    function handleDateChange(event) {
        var fixedDate = fixDate(event.target.value);
        var newSelectedDate = new Date (fixedDate);
        setSelectedDate(newSelectedDate);
        dispatch(newSelectedDate); // Dispatch state change when date is changed
        setForm({
            ...form, date: event.target.value
        });
    }

    return(
        <form display= 'grid' max-width= '200px' gap= '20px' onSubmit={submitForm}>
            <VStack spacing={4} alignItems="left" bg="green" paddingLeft= '15vw' paddingRight= '15vw' paddingTop='100px' paddingBottom='40px'>
                <FormLabel htmlFor="res-date">Choose Date</FormLabel>
                <Input type="date" id="res-date"
                        onChange={handleDateChange}
                />
                <FormLabel htmlFor="res-time">Choose Time</FormLabel>
                <Select placeholder='Select a Time' id="res-time "
                        onChange={e => {
                            setForm({
                                ...form, time: e.target.value
                            });
                        }}
                >
                    {availableTimes?.map(time => {
                        return <option key={time} value={time}> {time} </option>;
                    })}

                </Select>
                <FormLabel htmlFor="guests">Number of Guests</FormLabel>
                <Select placeholder='Select Nuumber of Guests' id="guests"
                        onChange={e => {
                            setForm({
                                ...form, guests: e.target.value
                            });
                        }}
                >
                    {numGuests?.map(num => {
                        return <option key={num} value={num}> {num} </option>;
                    })}

                </Select>
                {/* <Input type="number" placeholder={2} min="1" max="10" id="guests"
                        onChange={e => {
                            setForm({
                                ...form, guests: e.target.value
                            });
                        }}
                /> */}
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select placeholder='Select an Occasion' id="occasion"
                        onChange={e => {
                            setForm({
                                ...form, occasion: e.target.value
                            });
                        }}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </Select>
                <Button bg="#F4CE14" color="black" width='auto' size='lg' type="submit" >Reserve a Table</Button>
            </VStack>
        </form>
    )
  };