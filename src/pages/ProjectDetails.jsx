import React from 'react'
import { useParams } from "react-router-dom";
import mockup from '../assets/images/mockup2.png'
import ButtonView from '../components/ButtonView';
import SideBar from '../components/SideBar';
import ToolCapsule from '../components/ToolCapsule';
import ArrowUp from '../components/ArrowUp';
import videoFrame from '../assets/images/laptop-with-blank-screen2.png'

export default function ProjectDetails() {

  // const {projectName} = useParams(); 
  return (
    <React.Fragment>
      <section className="project-details-hero">
        <div>
        <h1>Sphere</h1>
        <ButtonView marginValue="14px auto" buttonTxt="View Live Website"/>
        </div>

        <div>
          <iframe src="//www.youtube.com/embed/f890SC1schE?autoplay=1&playlist=f890SC1schE&loop=1" allow="autoplay"/>
        </div>
      </section>

      <section className="project-info-container home-projects">
      <SideBar text="Overview"/>

      <div>
        <section className="project-info-paragraphs">
        <div className="proj-background">
          <h3>Background</h3>
          <div className="separation-line"/>
          <p> Sphere is a premier private space travel company offering trips to Mars. 
            Sphere is looking to sell tickets to 
            Mars by fostering public interest and increasing transparency in space tourism. </p>
        </div>

        <div className="paragraphs-row">
        <div>
          <h3>Scope</h3>
          <div className="separation-line"/>          
          <p>156 hours</p>
          <p>Self-started project</p>
        </div>

        <div>
          <h3>My role</h3>
          <div className="separation-line"/>
          <p>Front end developer</p>
          <p>UI Designer</p>
        </div>

        </div>


        <div className="proj-tools">
          <h3>Tools</h3>
          <div className="separation-line"/>
          <div className="tools-container">
          <ToolCapsule toolImgSrc="https://www.pngkit.com/png/detail/377-3771972_sass.png" toolName="HTML"/>
          <ToolCapsule toolImgSrc="https://www.pngkit.com/png/detail/377-3771972_sass.png" toolName="SASS"/>
          <ToolCapsule toolImgSrc="https://www.pngkit.com/png/detail/377-3771972_sass.png" toolName="ReactJs"/>
          <ToolCapsule toolImgSrc="https://www.pngkit.com/png/detail/377-3771972_sass.png" toolName="ReactJs"/>
          <ToolCapsule toolImgSrc="https://www.pngkit.com/png/detail/377-3771972_sass.png" toolName="ReactJs"/>
          <ToolCapsule toolImgSrc="https://www.pngkit.com/png/detail/377-3771972_sass.png" toolName="ReactJs"/>
        </div>
        </div>
        </section>

      </div>
      </section>

      <section className="wireframes-section">
        <h2>Wireframe Sketches</h2>
          <div>
        <p>I came up with a few early sketches for the homepage in order to determine which components worked best together.</p>

       <div className="wireframes-container">
        <img src="https://uploads-ssl.webflow.com/5f3591563107295bd1f3022c/5f7b7dcc81e983e3f6caac7f_Sphere%20Sketches.png"/>
        <img src="https://uploads-ssl.webflow.com/5f3591563107295bd1f3022c/5f7b7dcc81e983e3f6caac7f_Sphere%20Sketches.png"/>
        <img src="https://uploads-ssl.webflow.com/5f3591563107295bd1f3022c/5f7b7dcc81e983e3f6caac7f_Sphere%20Sketches.png"/>
        </div>
        </div>

        {/* <div className="ui-section wireframes-section">
        <h2>UI Design</h2>
        <p>I came up with a few early sketches for the homepage in order to determine which components worked best together.</p>

        <img src="https://uploads-ssl.webflow.com/5f3591563107295bd1f3022c/5f7b7dcc81e983e3f6caac7f_Sphere%20Sketches.png"/>
        </div>    */}
      </section> 

      {/* <section className="demo-section">
        <h2>Demo</h2>
        <img className="video-frame" src={videoFrame}/>
        <video loop="true" autoplay="autoplay" controls="controls"  muted>
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"></source>
    </video>
          </section> */}

<section className="wireframes-section reflection-section">
<h2>Reflection</h2>
<p>
This project also taught me the complexities of designing novel products that require a large level of commitment. It is only after we take the time to understand the thoughts and feelings of the user that we can effectively support them through these processes
</p>
</section>
 
<ArrowUp showArrowAt=".proj-background"/>
    </React.Fragment>
  )
}
