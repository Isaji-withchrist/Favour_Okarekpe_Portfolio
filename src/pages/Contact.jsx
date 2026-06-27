import React from "react";
import '../App.css';
import ContactMain from "../components/ContactMain";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

export default function Contact(){
    return(
        <>
        <Navbar/>
        <ContactMain/>
        <Footer/>
        </>
    )
}