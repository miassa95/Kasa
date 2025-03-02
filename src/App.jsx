

import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home"
import Apropos from "./Apropos";
import Menu from "./Menu";
import Error404 from "./Error404";
import Slideshow from "./Slideshow"; 
import "./App.css";

function App() {
    return(
        <BrowserRouter>
           <Menu /> 
           <div className="page-container"> 
        <Routes>
            <Route path="/" element={<Home/>} /> 
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/property/:id" element={<Slideshow />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
        </div>
        </BrowserRouter>
        
    )
  
 
}


export default App;


