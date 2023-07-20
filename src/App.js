import React, { useContext, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Store from './Components/Store/Store';
import Footer from './Components/Footer/Footer';
import AppContextProvider, { AppContext } from './Components/Context/AppContext';
import { ReactDOM } from 'react-dom';
import Modal from './Components/Modal/Modal';
import Portal from './Components/Modal/Portal';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  const { setPortal, portal } = useContext(AppContext)
  const [showStore, setShowStore] = useState(true);

  const toggleStore = () => {
    setShowStore(!showStore);
  };

  return (
    <>
    <AppContextProvider>
      <BrowserRouter>
        <Navbar portal={portal} setPortal={setPortal} />
      
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/cart" element={portal ? <Portal portal={portal} setPortal={setPortal} /> : null} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </AppContextProvider>
  </>

  );
}
