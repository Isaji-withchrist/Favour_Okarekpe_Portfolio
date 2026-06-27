import { Route, Routes } from "react-router";
import Contact from "./pages/Contact";
import LandingPage from "./pages/LandingPage";
import Project from "./pages/Project";
import About from "./pages/About";



export default function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Projects" element={<Project/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </>
  );
}