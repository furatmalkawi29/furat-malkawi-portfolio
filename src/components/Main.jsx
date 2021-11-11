import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";

export default function Main() {
  return (
    <main>
      {/* <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/projects/:projectName" component={ProjectDetails}/>
      </Switch> */}
      <ProjectDetails/>
      {/* <Home/> */}
    </main>
  );
}
