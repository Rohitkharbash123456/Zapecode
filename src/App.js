import React from 'react';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";


import HomeFinal from './Component/Homefinal';
import ServicesFinal from './Component/Servicesfinal';
import ContactFinal from './Component/Contactfinal';
import AboutFinal from './Component/Aboutfinal';
import Castleclass from './Component/Castleclass';
import ProductFinal from './Component/Bill';
import Navbarmain from './Component/Navbar';


export default function App() {
  return (
  
    <BrowserRouter>
    <Routes>
    
        {/* Route-specific Navbar rendering */}
        <Route
          render={({ location }) => (
            !location.pathname.includes('/Castleclass') && <Navbarmain />
          )}
        />
      
        <Route path="/" element={<Navbarmain />}>
          <Route index element={<HomeFinal />} />
          <Route path="AboutFinal" element={<AboutFinal />} />

          <Route path="ServicesFinal" element={<ServicesFinal />} />
          <Route path="ContactFinal" element={<ContactFinal />} />
          <Route path="ProductFinal" element={<ProductFinal />} />
          <Route path="Castleclass" element={<Castleclass/>} />
        </Route>
        
      
      
      </Routes>
    </BrowserRouter>
  );
}

