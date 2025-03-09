
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Error404 from "./pages/Error404";
import Apartment from "./pages/Apartment";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return(
        <BrowserRouter>
           <Header /> 
           <div className="page-container"> 
        <Routes>
            <Route path="/" element={<Home/>} /> 
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/property/:id" element={<Apartment />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
        </div>
        <Footer />
        </BrowserRouter>
        
    )
  
 
}


export default App;


