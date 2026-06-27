import React from "react";
import '../App.css';
import AboutMain from "../components/AboutMain";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

export default function About(){
    return(
        <>
        <Navbar/>
        <AboutMain/>
        <Footer/>
        </>
    )
}