import React, {createContext, useState} from "react";
import Navbar from "./Navbar";
import Projects from "./Projects"
import Additional from "./Additional";
import Footer from "./Footer"
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
export const ThemeContext = createContext('light');
function Main() {
    const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* Components that can access the theme */}
      <div >
      <Navbar />
      <About/>
      <hr />
      <Skills/>
      <hr />
      <Projects />
      <hr />
      <Experience/>
      <hr />
      <Additional/>
      <Footer/>
    </div>
    </ThemeContext.Provider>
  );
}
export default Main ;
