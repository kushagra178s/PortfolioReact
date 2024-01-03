import React from "react";
import {ThemeContext} from "./Main";
export default function Additional() {
  const theme = ThemeContext._currentValue.theme;
  // console.log(ThemeContext._currentValue.theme);
  return (
    <div className="main" style={{backgroundColor:`${theme=="light"?"white":"#193D3D"}`, color:`${theme=="light"?"black":"white"}`}}>
      <div className="about-me">
        <h2>
          <strong>
            <u>My Competitive Programming Profiles: </u>
          </strong>
        </h2>
        <ul
          style={{
            marginLeft: "25px",
            marginTop: "10px",
            fontSize: "20px",
            fontWeight: "500",
          }}
        >
          <li>
            <strong>
              LeetCode solved 1061+ questions and current Contest rating is 1791
              (max rating).
            </strong>{" "}
            <a href="https://leetcode.com/algodeveloper/" target="_blank">
              ProfileLink{" "}
            </a>
          </li>
          <li>
            <strong>
              CodeForces current Contest rating is 1251 (max rating).
            </strong>{" "}
            <a href="https://codeforces.com/profile/cpjourney" target="_blank">
              {" "}
              ProfileLink{" "}
            </a>
          </li>
          <li>
            <strong>GfgPractice </strong>
            <a
              href="https://auth.geeksforgeeks.org/user/kushagra17800/practice/"
              target="_blank"
            >
              ProfileLink
            </a>
          </li>
          <li>
            <strong>CodeStudio</strong>{" "}
            <a
              href="https://www.codingninjas.com/codestudio/profile/4595b2be-da15-4da6-a3eb-9ace07be2fe6"
              target="_blank"
            >
              {" "}
              ProfileLink{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
