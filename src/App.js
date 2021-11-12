import React from "react";
import './assets/scss/main.scss';
import './app.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import BackgroundShape from "./components/BackgroundShape";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";



function App() {
  return (
    <React.Fragment>
      <Router>
           
      <BackgroundShape/>
      
      <Header/>
      <Main/>
      <Footer/>

      </Router>
    </React.Fragment>
  );
}

export default App;