import React, { useEffect } from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import SideBar from "../components/SideBar";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
    window.onscroll= handleScroll;         
    //second way to do it:
    // window.addEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    if (
      document.body.scrollTop > 625 ||
      document.documentElement.scrollTop > 625
    ) {
      document.getElementById("text-container").className =
        "sticky-text-container";
    } else {
      document.getElementById("text-container").className = "text-container";
    }
  }

  return (
    <div className="home-page">
      <Hero />
      <section className="home-projects">
        <SideBar text="Latest Projects" />
        <h1 className="text-container-mobile">
          Last Projects
      </h1>
        <section className="projects-container">
          <Card id='scroll-to' />
          <Card id='scroll-to2'/>
          <Card id='scroll-to3'/>
          <Card id='scroll-to4'/>
          <Card id='scroll-to5'/>
        </section>
      </section>
    </div>
  );
}
