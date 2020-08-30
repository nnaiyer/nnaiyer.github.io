import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
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
import {BsMoon} from 'react-icons/bs';
import {BsSun} from 'react-icons/bs';


export default class NavBar extends Component {

  render() {
    const isLightMode = false;
    return(
      <div className="TopBar">
        <Navbar expand="lg" fixed="top" className="color-nav">





        <Navbar.Brand href="#email">
          <IconContext.Provider value={{ style: {fontSize: '28px'}}}>
            <a href="mailto: naiyer.nabeel@gmail.com"><GrMailOption/></a>
          </IconContext.Provider>
        </Navbar.Brand>
        <Navbar.Brand href="#git">
          <IconContext.Provider value={{ style: {fontSize: '30px'}}}>
          <a href="https://github.com/nnaiyer" target="_blank" style={{color:"black"}}>
            <div>
              <GrGithub/>
            </div>
          </a>
          </IconContext.Provider>
        </Navbar.Brand>
        <Navbar.Brand href="#linkedin">
          <IconContext.Provider value={{ style: {fontSize: '25px'}}}>
            <a href="https://www.linkedin.com/in/nabeelnaiyer/" target="_blank" style={{color:"black"}}>
              <div>
                <GrLinkedin/>
              </div>
            </a>
          </IconContext.Provider>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#AboutMe">ABOUT ME</Nav.Link>
              <Nav.Link href="#Skills">SKILLS</Nav.Link>
              <Nav.Link href="#Projects">PROJECTS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
