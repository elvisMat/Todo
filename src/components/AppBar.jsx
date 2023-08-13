import { Link } from "@chakra-ui/react";
import React from "react";
// import "../styles/appbar.css";
function AppBar() {
  return (
    <div className="appbar">
      <div className="appbar-header">Rapelang Mathibe</div>
      <div className="appbar-menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#todo">To do</a>
          </li>

          <li>
            <a href="#sleep-calculator">Sleep calculator</a>
          </li>
          <li>
            <a href="#">Time table</a>
          </li>
          <li>
            <a href="#">Games</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AppBar;
