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
import Pdf from '../src/Report.pdf';


export default class ValueOne extends Component{
  constructor(props){
    super(props)
    }


  render(){
   return(
                  <div>
                  <div> <h2 style={{textAlign:"center"}}> Image Cartoonization </h2> </div>
                  <div className="Photo">
                    <img src="cartoonization.png" style={{"height": "80%", "width": "78%", border:"3px solid aliceblue"}} alt="Image of Bargain Bot"/>
                  </div>
                  <Row style={{justifyContent:"center", marginTop:"5px"}}>
                  <div><Button variant="primary" size="sm">MATLAB</Button>{' '}</div>
                  <div style={{marginLeft:"5px"}}><Button variant="info" size="sm" href="https://github.com/nnaiyer/Cartoonization" target="_blank">
                    <IconContext.Provider value={{ style: {fontSize: '15px', marginTop:"-2px"}}}>
                      <GrGithub/> Repository
                    </IconContext.Provider>
                    </Button>{' '}</div>
                  </Row>
                  <div style={{textAlign:"left"}}> <br/> One of my favorite classes in college was Image Processing with <a href="https://en.wikipedia.org/wiki/Alan_Bovik" target="_blank"><b>Alan Bovik</b></a>. In that class I wrote this image cartoonization code as a project in MATLAB. Essentially what it does is take an image, cluster it using some algorithm (K-Means in this case), and overlaying an edge map on top of that clustered image. The concept is pretty straightforward and it was fun to experiment with different images to see what kind of result I'd get. Be warned, the code is... not very pretty. One day I hope to to revisit this to optimize the program. <br/><br/>You can also check out the report for this project <a href={Pdf} target="_blank"><b>here!</b></a></div>

              </div>
                  )
}
}
