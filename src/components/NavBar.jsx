import React from "react";
import logo from "../assets/images/logo.png";
import { FaLinkedinIn } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav>
      <div className="menu-list-container">
        <img src={logo} alt="logo" />

        <div className="menu-list">
          <div>
            <div>Home</div>
            <div className="hover-line" />
          </div>
          <div>
            <div>Projects</div>
            <div className="hover-line" />
          </div>
          <div>
            <div>About</div>
            <div className="hover-line" />
          </div>
          <div>
            <div>Resume</div>
            <div className="hover-line" />
          </div>
        </div>
      </div>
      <FaLinkedinIn className="linkedin-icon" />
      <div className="menu-btn">
        <div>MENU</div>
        <div className="btn-line" />
      </div>
    </nav>
  );
}
