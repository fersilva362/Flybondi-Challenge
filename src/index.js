import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
import {FlybondiProvider, FlyContext} from './components/Context'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <FlybondiProvider>
        <App />
      </FlybondiProvider>
    </ChakraProvider>
  </BrowserRouter>
);


