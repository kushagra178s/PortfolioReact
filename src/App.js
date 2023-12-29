import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Projects from "./Components/Projects"
function App() 
{
  return (
    <div className="root">
      <Navbar />
      <Projects />
    </div>
  );
}
export default App;
