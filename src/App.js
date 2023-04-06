import * as React from 'react'

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Booking from './components/Booking';
import Footer from './components/Footer'
import ConfirmedBoooking from './components/ConfirmedBooking';

import { Route, Routes } from 'react-router-dom';

//extend the theme
const theme = extendTheme({
    colors: {
    green: '#495E57',
    yellow: '#F4CE14',
    orange: '#EE9972',
    white: '#EDEFEE',
    black: '#333333',
  },

  fonts: {
    heading: "Markazi Text, serif",
    body: "KARLA, sans-serif",
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/confirmed' element={<ConfirmedBoooking/>}/>
        </Routes>
      </div>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
