import React from "react";
import '../App.css';
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import ProjectLinks from '../components/ProjectMain'

export default function Project(){
    return(
        <>
        <Navbar/>
        <ProjectLinks/>
        <Footer/>
        </>
    )
}