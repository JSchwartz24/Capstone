import React, {useState, useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";

export default function Booking({form, setForm, availableTimes, dispatch, submitForm}) {
    const [selectedDate, setSelectedDate] = useState(null);

    const numGuests= [1,2,3,4,5,6,7,8,9,10];

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
        formik.handleChange(event);
    }

    //trying to add formik to check form validity
    const {isLoading, response, submit} = useSubmit();

    const formik = useFormik({
      initialValues: { date: '', time: '', guests: '', occasion: ''},
      onSubmit: (values) => {
        submit("http://www.google.com", values);
      },
      validationSchema: Yup.object({
        date: Yup.date().required("Required"),
        time: Yup.string().required("Required"),
        guests: Yup.number().min(1, 'Must be at least one person').required("Required"),
        occasion: Yup.string().optional(),
      }),
      onSubmit: (e) => {
        console.log("Submitted");
        submitForm(e);
      },
    });

    console.log(formik.errors);

    //to submit form to booking and to use formik

    return(
        <form display= 'grid' max-width= '200px' gap= '20px' onSubmit={formik.handleSubmit}>
            <VStack spacing={4} alignItems="left" bg="green" paddingLeft= '15vw' paddingRight= '15vw' paddingTop='100px' paddingBottom='40px'>
                <FormControl isInvalid={formik.touched.date && formik.errors.date}>
                    <FormLabel htmlFor="date" aria-label="date">Choose Date</FormLabel>
                    <Input
                        type="date"
                        id="date"
                        value = {formik.values.date}
                        {...formik.getFieldProps('date')}
                        onChange={handleDateChange}
                    />
                    <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.time && formik.errors.time}>
                    <FormLabel htmlFor="time" aria-label="time">Choose Time</FormLabel>
                    <Select placeholder='Select a Time' id="time"
                            value = {formik.values.time}
                            {...formik.getFieldProps('time')}
                            onChange={e => {
                                formik.handleChange(e);
                                setForm({
                                    ...form, time: e.target.value
                                });
                            }}
                    >
                        {availableTimes?.map(time => {
                            return <option key={time} value={time}> {time} </option>;
                        })}

                    </Select>
                    <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
                    <FormLabel htmlFor="guests" aria-label="guests">Number of Guests</FormLabel>
                    <Select placeholder='Select Number of Guests' id="guests"
                        value = {formik.values.guests}
                        {...formik.getFieldProps('guests')}
                        onChange={e => {
                            formik.handleChange(e);
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
                            {...formik.getFieldProps('guests')}
                            onChange={e => {
                                setForm({
                                    ...form, guests: e.target.value
                                });
                            }}
                    /> */}
                    <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.occasion && formik.errors.occasion}>
                    <FormLabel htmlFor="occasion" aria-label="occasion">Occasion</FormLabel>
                    <Select placeholder='Select an Occasion' id="occasion"
                            {...formik.getFieldProps('occasion')}
                            onChange={e => {
                                setForm({
                                    ...form, occasion: e.target.value
                                });
                            }}
                    >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </Select>
                    <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
                </FormControl>
                <Button isLoading={isLoading} aria-label="Submit" bg="#F4CE14" color="black" width='auto' size='lg' type="submit" >Reserve a Table</Button>
            </VStack>
        </form>
    )
  };