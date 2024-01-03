import React, { useContext, useEffect, useState } from "react" ;
import {ThemeContext} from "./Main";
function Navbar() { 
  const {theme, setTheme} = useContext(ThemeContext);
  // console.log(theme, setTheme);
  const[currentTheme, setCurrentTheme] = useState(theme);
  // useEffect(()=>{},[currentTheme])
  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    setTheme(newTheme);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <strong style={{ fontSize: "20px" }}>Kushagra Sharma </strong>
      </div>
      <div className="navbar-links">
        <li>
        <button className="mode-button" onClick={toggleTheme} style={{padding:"5px", }}><strong>{currentTheme=="light"? "DarkMode":"LightMode"}</strong></button>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1KnAhjMBvCv3bLyWdC6afVLrChvQvyvv5/view?usp=sharing"
            target="_blank"
          >
            <u>
              <b>Resume</b>
            </u>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kushagra-sharma1209/"
            target="_blank"
          >
            <u>
              <b>LinkedIn</b>
            </u>
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/algodeveloper/" target="_blank">
            <u>
              <b>LeetCode</b>
            </u>
          </a>
        </li>
        <li>
          <a href="https://github.com/kushagra178s" target="_blank">
            <u>
              <b>Github</b>
            </u>
          </a>
        </li>
        <li>
          <a href="https://codeforces.com/profile/cpjourney" target="_blank">
            <u>
              <b>Codeforces</b>
            </u>
          </a>
        </li>
      </div>
    </div>
  );
}
export default Navbar ;