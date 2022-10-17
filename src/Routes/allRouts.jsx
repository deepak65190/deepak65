import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./contactMe";
import Education from "./education";
import Skills from "./skills";
import Projects from "./projects";


function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/education" element={<Education />}></Route>
      <Route path="/skills" element={<Skills />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
     
     
      
      
    
    </Routes>
  );
}

export default AllRoutes;
