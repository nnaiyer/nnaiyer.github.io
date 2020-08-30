import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavBar from './navbar.js';
import ReactRevealText from 'react-reveal-text';
import {BsMoon} from 'react-icons/bs';
import {BsSun} from 'react-icons/bs';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {GrLinkedin} from 'react-icons/gr';
import {IconContext} from "react-icons"
import {GrGithub} from 'react-icons/gr';
import {GrMailOption} from 'react-icons/gr';
import {FiMail} from 'react-icons/fi';


      // <div className="Photo">
      //   <img src="profile.png" style={{"height": "25%", "width": "25%"}} alt="Photo of me"/>
      // </div>

function App() {

  const [darkMode, setDarkMode] = React.useState(getInitialMode);
  React.useEffect(() => {localStorage.setItem("dark", JSON.stringify(darkMode))}, [darkMode])


  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    return savedMode || false
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>


      <div>
        <Navbar expand="lg" fixed="top" className="color-nav TopBar">

        <Navbar.Brand href="#lightdarktoggle">
          <IconContext.Provider value={{ style: {fontSize: '30px'}}}>
            <div>
              <button className="modeToggle" onClick={() => setDarkMode(prevMode => !prevMode)}>
                {darkMode ? <BsSun style={{color:"white"}}/> : <BsMoon/>}
              </button>
            </div>
          </IconContext.Provider>
        </Navbar.Brand>


        <Navbar.Brand href="#email">
          <IconContext.Provider value={{ style: {fontSize: '27px'}}}>
            <a href="mailto: naiyer.nabeel@gmail.com">
              <div>
                {darkMode ? <FiMail style={{color:"white"}}/> : <FiMail style={{color:"black"}}/>}
              </div>
            </a>
          </IconContext.Provider>
        </Navbar.Brand>
        <Navbar.Brand href="#git">
          <IconContext.Provider value={{ style: {fontSize: '30px'}}}>
          <a href="https://github.com/nnaiyer" target="_blank" style={{color:"black"}}>
            <div>
              {darkMode ? <GrGithub style={{color:"white"}}/> : <GrGithub style={{color:"black"}}/>}
            </div>
          </a>
          </IconContext.Provider>
        </Navbar.Brand>
        <Navbar.Brand href="#linkedin">
          <IconContext.Provider value={{ style: {fontSize: '25px'}}}>
            <a href="https://www.linkedin.com/in/nabeelnaiyer/" target="_blank" style={{color:"black"}}>
              <div>
                {darkMode ? <GrLinkedin style={{color:"white"}}/> : <GrLinkedin style={{color:"black"}}/>}
              </div>
            </a>
          </IconContext.Provider>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#AboutMe">
              {darkMode ? <h6 style={{color:"white", marginTop:"12px",fontWeight:"bold"}}>ABOUT ME</h6> : <h6 style={{color:"black", marginTop:"12px", fontWeight:"bold"}}>ABOUT ME</h6>}
              </Nav.Link>
              <Nav.Link href="#Skills">
                {darkMode ? <h6 style={{color:"white", marginTop:"12px", fontWeight:"bold"}}>SKILLS</h6> : <h6 style={{color:"black", marginTop:"12px", fontWeight:"bold"}}>SKILLS</h6>}
              </Nav.Link>
              <Nav.Link href="#Projects">
                {darkMode ? <h6 style={{color:"white", marginTop:"12px", fontWeight:"bold"}}>PROJECTS</h6> : <h6 style={{color:"black", marginTop:"12px", fontWeight:"bold"}}>PROJECTS</h6>}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>











      <div className="home container" id="home">
        <ReactRevealText
          text="NABEEL NAIYER"
          show
      />
      </div>

      <div className="aboutMe container">
      <h2>
      About Me
      </h2>
      <div>
      Enter text here
      </div>
      </div>



    </div>
  );
}

export default App;
