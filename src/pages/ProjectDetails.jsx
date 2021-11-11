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
        <p>View Live Website</p>
        <img alt="mockup" src={mockup}/>
      </section>

      <section className="home-projects">
      <SideBar text="Overview" />
      <div>
        <section className="project-info-paragraphs">

        <div>
          <h3>Background</h3>
          <p> Sphere is a premier private space travel company offering trips to Mars. 
Sphere is looking to sell tickets to 
Mars by fostering public interest and increasing transparency in space tourism. </p>
        </div>

        <div>
          <h3>Scope</h3>
          <p>156 hours</p>
          <p>Self-started project</p>
        </div>

        <div>
          <h3>My role</h3>
          <p>Front end developer</p>
          <p>UI Designer</p>
        </div>
        </section>

        <section className="wireframes-section">
        <h2>Wireframes</h2>
          <div>
        <h3>Wireframe Sketches</h3>
        <p>I came up with a few early sketches for the homepage in order to determine which components worked best together.</p>

        <img src="https://uploads-ssl.webflow.com/5f3591563107295bd1f3022c/5f7b7dcc81e983e3f6caac7f_Sphere%20Sketches.png"/>
        </div>

        <div>
        <h3>UI Design</h3>
        <p>I came up with a few early sketches for the homepage in order to determine which components worked best together.</p>

        <img src="https://uploads-ssl.webflow.com/5f3591563107295bd1f3022c/5f7b7dcc81e983e3f6caac7f_Sphere%20Sketches.png"/>
        </div>   
      </section> 

      <section>
        
        <h2>Demo</h2>
        <img src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f6f33e669430233f630_6002086f72b727b97401e2d9_I1eCevUsAYaO0yMsrgKHxAFtrGakrhnXJ3kjmD7HYqouasmfIlbM0fVqfyaXxRvmf821DmJXUBp4a3_3CAKsS7HiyZl2osSIic10PUR0hMCykejbzrfroevfMJrcfXFhJkvQnx0R.gif"/>


      </section>

      <section>
      <h2>Reflection</h2>
<p>
This project also taught me the complexities of designing novel products that require a large level of commitment. It is only after we take the time to understand the thoughts and feelings of the user that we can effectively support them through these processes
</p>
      </section>
      </div>



      </section>

 
      
    </React.Fragment>
  )
}
