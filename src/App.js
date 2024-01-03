import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Projects from "./Components/Projects"
import Additional from "./Components/Additional";
import Footer from "./Components/Footer"
import About from "./Components/About";
import Skills from "./Components/Skills";
function App() 
{
  return (
    <div className="root">
      <Navbar />
      <About/>
      <hr />
      <Skills/>
      <hr />
      <Projects />
      <hr />
      <Additional/>
      <Footer/>
    </div>
  );
}
export default App;
