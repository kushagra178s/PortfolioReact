import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Projects from "./Components/Projects"
import Additional from "./Components/Additional";
import Footer from "./Components/Footer"
function App() 
{
  return (
    <div className="root">
      <Navbar />
      <Projects />
      <hr />
      <Additional/>
      <Footer/>
    </div>
  );
}
export default App;
