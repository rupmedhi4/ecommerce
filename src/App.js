import React, { useContext, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import AppContextProvider, { AppContext } from './Components/Context/AppContext';
import { ReactDOM } from 'react-dom';
import Modal from './Components/Modal/Modal';
import Portal from './Components/Modal/Portal';

export default function App() {
const {setPortal,portal} = useContext(AppContext)

  return (
    <AppContextProvider>  
      <Navbar portal={portal} setPortal = {setPortal}/>
            {portal ?<Portal/>:null}  
      <Home />
      <Footer />
    </AppContextProvider>
  );
}
