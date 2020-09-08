import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './hexi.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import {IconContext} from "react-icons"
import {GrGithub} from 'react-icons/gr';



export default class ValueFour extends Component{
  constructor(props){
    super(props)
    }


  render(){
   return(
                  <div>
                  <div> <h2 style={{textAlign:"center"}}> Profile Website </h2> </div>
                  <div className="Photo">
                    <img src="portfolio.png" style={{"height": "80%", "width": "78%", border:"3px solid aliceblue"}} alt="Portfolio site of me"/>
                  </div>
                  <Row style={{justifyContent:"center", marginTop:"5px"}}>
                  <div><Button variant="primary" size="sm">ReactJS</Button>{' '}</div>
                  <div style={{marginLeft:"5px"}}><Button variant="primary" size="sm" >HTML</Button>{' '}</div>
                  <div style={{marginLeft:"5px"}}><Button variant="primary" size="sm" >CSS</Button>{' '}</div>
                  <div style={{marginLeft:"5px"}}><Button variant="primary" size="sm" >JavaScript</Button>{' '}</div>
                  <div style={{marginLeft:"5px"}}><Button variant="info" size="sm" href="https://github.com/nnaiyer/nnaiyer.github.io" target="_blank">
                    <IconContext.Provider value={{ style: {fontSize: '15px', marginTop:"-2px"}}}>
                      <GrGithub/> Repository
                    </IconContext.Provider>
                    </Button>{' '}</div>
                  </Row>
                  <div style={{textAlign:"left"}}> <br/>You're on my profile website! This was built with ReactJS and it's my first real shot at web development. Through this I learned a ton about HTML, CSS, and how React works in general. Hope you like the site! </div>

              </div>
                  )
}
}
