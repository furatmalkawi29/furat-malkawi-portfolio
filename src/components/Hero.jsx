import React from "react";
import arrowDown from '../assets/images/down-arrow.png'

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <h1 className="lg-screen-heading">
        <pre>Hello, I'm Furat, {"\n"}a front-end developer.</pre>
      </h1>

      <h1 className="md-screen-heading">
        <pre>
          Hello, I'm Furat, {"\n"}a front-end {"\n"}developer.
        </pre>
      </h1>
      <h1 className="sm-screen-heading">
        <pre>
          Hello, I'm Furat, {"\n"}a front-end {"\n"}developer.
        </pre>
      </h1>
      <h2>
        I build interactive and efficient web solutions, using a
        good base of <span>analytical thinking</span> and <span>strong attention</span> to detail.
      </h2>
      
      <a id="arrow-down" href="#projects-container"><img className="arrow-down" src={arrowDown}/></a>

      </section>
  );
}
