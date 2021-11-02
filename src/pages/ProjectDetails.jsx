import React from 'react'
import { useParams } from "react-router-dom";
import mockup from '../assets/images/mockup2.png'
import SideBar from '../components/SideBar';

export default function ProjectDetails() {

  // const {projectName} = useParams(); 
  return (
    <React.Fragment>
      
      <section className="project-details-heading">
        <h1>Sphere</h1>
        <img alt="mockup" src={mockup}/>
      </section>

      <section className="home-projects">
      <SideBar text="Overview" />
      <div className="project-info-paragraphs">
        <div>
          <h1>Background</h1>
          <p> Sphere is a premier private space travel company offering trips to Mars. 
Sphere is looking to sell tickets to 
Mars by fostering public interest and increasing transparency in space tourism. </p>
        </div>

        <div>
          <h1>Scope</h1>
          <p>156 hours</p>
          <p>Self-started project</p>
        </div>
      </div>
      </section>


      
    </React.Fragment>
  )
}
