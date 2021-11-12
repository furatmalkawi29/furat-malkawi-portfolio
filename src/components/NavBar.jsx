import React from "react";
import logo from "../assets/images/logo.png";
import { FaLinkedinIn } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav id="navbar">
      <div className="menu-list-container">
        <img src={logo} alt="logo" className="nav-item"/>

        <div className="menu-list">
          <div>
            <div className="nav-item">Home</div>
            <div className="hover-line" />
          </div>
          <div>
            <div className="nav-item">Projects</div>
            <div className="hover-line" />
          </div>
          <div>
            <div className="nav-item">About</div>
            <div className="hover-line" />
          </div>
          <div>
            <div className="nav-item">Resume</div>
            <div className="hover-line" />
          </div>
        </div>
      </div>
      <a href="https://www.linkedin.com/in/furatmalkawi" target="_blank"><FaLinkedinIn className="linkedin-icon nav-item" /></a>
      <div className="menu-btn">
        <div className="nav-item">MENU</div>
        <div className="btn-line" />
      </div>
    </nav>
  );
}
