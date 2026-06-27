import React from "react";
import '../App.css';
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import FeaturedProjects from "../components/FeaturedProject";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function LandingPage(){
    return(<>
        <Navbar/>
        
            <Hero/>
            <TechStack/>
            <FeaturedProjects/>
            <CTA/>
            <Footer/>
        
    </>
    )
}