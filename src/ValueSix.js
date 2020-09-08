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



export default class ValueSix extends Component{
  constructor(props){
    super(props)
    }


  render(){
   return(
                  <div>
                  <div> <h2 style={{textAlign:"center"}}> Voter Registration - Texas (VRTX) </h2> </div>
                  <div className="Photo">
                    <img src="vrtxbot.png" style={{"height": "80%", "width": "78%", border:"3px solid aliceblue"}} alt="Image of Bargain Bot"/>
                  </div>
                  <Row style={{justifyContent:"center", marginTop:"5px"}}>
                  <div><Button variant="primary" size="sm">Ruby</Button>{' '}</div>
                  <div style={{marginLeft:"5px"}}><Button variant="info" size="sm" href="https://github.com/nnaiyer/VRTX" target="_blank">
                    <IconContext.Provider value={{ style: {fontSize: '15px', marginTop:"-2px"}}}>
                      <GrGithub/> Repository
                    </IconContext.Provider>
                    </Button>{' '}</div>
                  </Row>
                  <div style={{textAlign:"left"}}> <br/> After hearing news reports that voter registration statuses were being marked inactive, I wanted to make sure my status was protected. So I enlisted the help of Ruby and Selenium to check the Texas voter registration page on a daily basis to let me know the condition of my status. This can also be used by anybody in Texas by simply filling in the required data fields and creating a scheduling task to execute the code.</div>

              </div>
                  )
}
}
