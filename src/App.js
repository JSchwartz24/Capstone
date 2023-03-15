import * as React from 'react'

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import './App.css';
import Header from'./components/Header';
import Main from './components/Main';
import Footer from'./components/Footer';

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
      <main>
        <Header/>
        <Main/>
        <Footer/>
      </main>
    </ChakraProvider>
  );
}

export default App;
