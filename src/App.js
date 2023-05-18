import React from "react";

import {BrowserRouter,Route,Routes,} from "react-router-dom"
import Home from './components/pages/Home'
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Navbar";
import Login from './components/pages/Login'

export default function App() {
  
  return (
    <>

    
      <BrowserRouter>
      <Navbar/>
      <Routes> 
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact  path="/contact" element={<Contact/>}/>
      <Route exact path="/login" element={<Login/>}/>
      </Routes> 
      </BrowserRouter>
    </>
  );
}