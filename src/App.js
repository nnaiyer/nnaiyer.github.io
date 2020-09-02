import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavBar from './navbar.js';
import ReactRevealText from 'react-reveal-text';
import {BsMoon} from 'react-icons/bs';
import {BsSun} from 'react-icons/bs';
import {RiMoonClearLine} from 'react-icons/ri'
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
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import {DiRuby} from 'react-icons/di'
import {DiJava} from 'react-icons/di'
import {DiJavascript1} from 'react-icons/di'
import {DiMsqlServer} from 'react-icons/di'
import {DiReact} from 'react-icons/di'


import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';






function App() {

  const [darkMode, setDarkMode] = React.useState(getInitialMode);
  React.useEffect(() => {localStorage.setItem("dark", JSON.stringify(darkMode))}, [darkMode])


  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    return savedMode || false
  }

  const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    {props}
  </Tooltip>
);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>


      <div>
        <Navbar expand="lg" fixed="top" className="color-nav TopBar">

        <Navbar.Brand href="#lightdarktoggle">
          <IconContext.Provider value={{ style: {fontSize: '24px', marginTop:'3px'}}}>
            <div>
              <button className="modeToggle" onClick={() => setDarkMode(prevMode => !prevMode)}>
                {darkMode ? <BsSun style={{color:"white"}}/> : <RiMoonClearLine/>}
              </button>
            </div>
          </IconContext.Provider>
        </Navbar.Brand>


        <Navbar.Brand href="#email">
          <IconContext.Provider value={{ style: {fontSize: '25px', marginTop:'6px'}}}>
            <a href="mailto: naiyer.nabeel@gmail.com">
              <div>
                {darkMode ? <FiMail style={{color:"white"}}/> : <FiMail style={{color:"black"}}/>}
              </div>
            </a>
          </IconContext.Provider>
        </Navbar.Brand>
        <Navbar.Brand href="#git">
          <IconContext.Provider value={{ style: {fontSize: '26px', marginTop:"5px"}}}>
          <a href="https://github.com/nnaiyer" target="_blank" style={{color:"black"}}>
            <div>
              {darkMode ? <GrGithub style={{color:"white"}}/> : <GrGithub style={{color:"black"}}/>}
            </div>
          </a>
          </IconContext.Provider>
        </Navbar.Brand>
        <Navbar.Brand href="#linkedin">
          <IconContext.Provider value={{ style: {fontSize: '22px', marginTop:"4px"}}}>
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
              <div className="topText">
                  {darkMode ?
                  <Link activeClass="active" to="home" spy={true} smooth={true} duration={50}>
                    <button className="topButtons">
                      <h6 style={{color:"white", marginTop:"15px", fontWeight:"bold"}}>
                        HOME
                      </h6>
                    </button>
                  </Link> :
                  <Link activeClass="active" to="home" spy={true} smooth={true} duration={50}>
                    <button className="topButtons">
                      <h6 style={{color:"black", marginTop:"15px", fontWeight:"bold"}}>
                        HOME
                      </h6>
                    </button>
                  </Link>}
              </div>
              <div className="topText">
                  {darkMode ?
                  <Link activeClass="active" to="aboutMe" spy={true} smooth={true} duration={50} offset={-150}>
                    <button className="topButtons">
                      <h6 style={{color:"white", marginTop:"15px", fontWeight:"bold"}}>
                        ABOUT ME
                      </h6>
                    </button>
                  </Link> :
                  <Link activeClass="active" to="aboutMe" spy={true} smooth={true} duration={50} offset={-150}>
                    <button className="topButtons">
                      <h6 style={{color:"black", marginTop:"15px", fontWeight:"bold"}}>
                        ABOUT ME
                      </h6>
                    </button>
                  </Link>}
              </div>

              <div className="topText">
                  {darkMode ?
                  <Link activeClass="active" to="projects" spy={true} smooth={true} duration={50}>
                    <button className="topButtons">
                      <h6 style={{color:"white", marginTop:"15px", fontWeight:"bold"}}>
                        PROJECTS
                      </h6>
                    </button>
                  </Link> :
                  <Link activeClass="active" to="projects" spy={true} smooth={true} duration={50}>
                    <button className="topButtons">
                      <h6 style={{color:"black", marginTop:"15px", fontWeight:"bold"}}>
                        PROJECTS
                      </h6>
                    </button>
                  </Link>}
              </div>
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

      <div className="aboutMe container" id="aboutMe">
        <h2>
          Hi! I'm Nabeel!
        </h2>
      <div>

        <div className="aboutText">
          <Row>
            <Col lg={6}>
              I graduated from The University of Texas at Austin with a B.S. in Electrical Engineering and a B.S. in Mathematics.
              In my professional life, I'm a software engineer who has been working at Visa since June 2019. <br/><br/>
              In my personal life, I'm a huge fan of hiking and bouldering! One of my short-term goals is to visit every national park in America (Alaska's gonna be tough). But I'm not all about the outdoors; you can catch me playing games on my Switch or (virtually) hanging out with friends when I have some downtime. <br/><br/>
              I also think it's super fun to experiment with food recipes! Check out my food related life here: INSERT LINK HERE.
              <br/><br/><br/><br/>

              <div className="techIcons">
                <IconContext.Provider value={{ style: {fontSize: '40px'}}}>
                    <div>
                      <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 150 }} overlay={renderTooltip("Ruby")}>
                        {darkMode ? <DiRuby style={{color:"white", fontSize:"35px"}}/> : <DiRuby style={{color:"black", fontSize:"35px"}}/>}
                      </OverlayTrigger>
                      <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 150 }} overlay={renderTooltip("Java")}>
                        {darkMode ? <DiJava style={{color:"white", marginLeft:"15px"}}/> : <DiJava style={{color:"black", marginLeft:"15px"}}/>}
                      </OverlayTrigger>
                      <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 150 }} overlay={renderTooltip("JavaScript")}>
                        {darkMode ? <DiJavascript1 style={{color:"white", marginLeft:"15px"}}/> : <DiJavascript1 style={{color:"black", marginLeft:"15px"}}/>}
                      </OverlayTrigger>
                      <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 150 }} overlay={renderTooltip("SQL Server")}>
                        {darkMode ? <DiMsqlServer style={{color:"white", marginLeft:"15px"}}/> : <DiMsqlServer style={{color:"black", marginLeft:"15px"}}/>}
                      </OverlayTrigger>
                      <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 150 }} overlay={renderTooltip("React")}>
                        {darkMode ? <DiReact style={{color:"white", marginLeft:"15px"}}/> : <DiReact style={{color:"black", marginLeft:"15px"}}/>}
                      </OverlayTrigger>
                    </div>
                </IconContext.Provider>
              </div>






            </Col>
            <Col>
              <Carousel>
                <Carousel.Item>
                  <div className="Photo">
                    <img src="profile.png" style={{"height": "75%", "width": "75%", marginLeft:"70px"}} alt="Photo of me"/>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="Photo">
                    <img src="profile2.png" style={{"height": "75%", "width": "75%", marginLeft:"70px"}} alt="Photo of me in the snow"/>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="Photo">
                    <img src="profile3.png" style={{"height": "75%", "width": "75%", marginLeft:"70px"}} alt="Photo of me about to graduate"/>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </div>


        <div className="projects container" id="projects">
          <h2>
            Hi! These are my projects!
          </h2>
        </div>

      </div>
      </div>






    </div>
  );
}

export default App;
