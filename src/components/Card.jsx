import React, { useState } from "react";
import $ from "jquery";
import ButtonView from "./ButtonView";

export default function Card(props) {


  $(window).on("scroll", function () {
    var hT = $(`.${props.id}`).offset().top,
      hH = $(`.${props.id}`).outerHeight(),
      hT2 = $(`.info-${props.id}`).offset().top,
      hH2 = $(`.info-${props.id}`).outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();

    //project image
    if (wS > hT - wH && !(wS > hT + hH)&&window.innerWidth>631) {
      $(`.${props.id}`).css(
        "transform",
        `scale3d(${1 + (hT + hH - wS) / 12000},${1 + (hT + hH - wS) / 12000},1)`
      );
    } else if (wS > hT - wH && !(wS > hT + hH)&&window.innerWidth<=631){
      $(`.${props.id}`).css(
        "transform",
        `scale3d(${1 + (hT + hH - wS) / 4000},${1 + (hT + hH - wS) / 4000},1)`
      );
    }

    //project card info
    //window.innerWidth --> to detect mobile screen size
    if (wS > hT2 - wH && !(wS > hT2 + hH2) &&window.innerWidth>631) {
      $(`.info-${props.id}`).css(
        "transform",
        `translate3d(0px,${(hT + hH - wS) / 4}px,0px)`
      );
    }else if (wS > hT2 - wH && !(wS > hT2 + hH2) &&window.innerWidth<=631){
      $(`.info-${props.id}`).css(
        "transform",
        `translate3d(0px,${(hT + hH - wS) / 10}px,0px)`
      );
    }
  });


  return (
    <section id={`info-${props.id}`} className={`project-card`}>
      <div className={`card-info info-${props.id}`}>
        <h1>Making meaningful connections on LinkedIn</h1>
        <div className="separation-line"/>
        <h2>
          Improving the networking feature set on LinkedIn by promoting
          meaningful professional connections and mentorship opportunities.
        </h2>
        <ButtonView buttonTxt="View Project"/>
      </div>
      <img
        className={props.id}
        alt=""
        src={
          "https://uploads-ssl.webflow.com/5f3591563107295bd1f3022c/5fb56f1b4b67c1af051d5df2_smartmockups_khnrs7yp.png"
        }
      />
      <div className="mobile-separation-line"/>
       <h1 className="mobile-only-heading">
        Making meaningful connections on LinkedIn
      </h1>
    </section>
  );
}
