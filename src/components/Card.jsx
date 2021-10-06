import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import $ from "jquery";

export default function Card(props) {
  const [animationClass, setAnimationClass] = useState("");
  const [btnColorClass, setBtnColorClass] = useState("");

  function enterHandle() {
    console.log("enter");
    setAnimationClass("icon-in");
    setBtnColorClass("text-in");
  }
  function leaveHandle() {
    console.log("leave");
    setAnimationClass("icon-out");
    setBtnColorClass("text-out");
  }


  $(window).on("scroll", function () {

    var hT = $(`.${props.id}`).offset().top,
      hH = $(`.${props.id}`).outerHeight(),
      hT2 = $(`.info-${props.id}`).offset().top,
      hH2 = $(`.info-${props.id}`).outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();

      //project image
    if (wS > hT - wH && !(wS > hT + hH)) {
        $(`.${props.id}`).css(
          "transform",
          `scale3d(${1 + (hT + hH - wS) / 12000},${1 + (hT + hH - wS) / 20000},1)`
        );
    }

    //project card info
    if (wS > hT2 - wH && !(wS > hT2 + hH2)) {
    $(`.info-${props.id}`).css(
      "transform",
      `translate3d(0px,${(hT + hH - wS)/4}px,0px)`
    );
    }
  });


  return (
    <section className={`project-card`}>
      <div className={`card-info info-${props.id}`}>
        <h1>Making meaningful connections on LinkedIn</h1>
        <div className="separation-line"></div>
        <h2>
          Improving the networking feature set on LinkedIn by promoting
          meaningful professional connections and mentorship opportunities.
        </h2>
        <div
          className={`view-button ${btnColorClass}`}
          onMouseEnter={enterHandle}
          onMouseLeave={leaveHandle}
        >
          <p>View Project</p>
          <FiArrowUpRight className={animationClass} viewBox="0 0 20 20" />
        </div>
      </div>
      <img
        className={props.id}
        alt=""
        src={
          "https://uploads-ssl.webflow.com/5f3591563107295bd1f3022c/5fb56f1b4b67c1af051d5df2_smartmockups_khnrs7yp.png"
        }
      />
    </section>
  );
}
