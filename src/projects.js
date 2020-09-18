import React from 'react';
import {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './hexi.css';
import './App.css';
import ValueZero from './ValueZero.js';
import ValueOne from './ValueOne.js';
import ValueThree from './ValueThree.js';
import ValueFour from './ValueFour.js';
import ValueSix from './ValueSix.js';


export default class Projects extends Component{
  constructor(props){
    super(props)
    this.state = {
     value:0
    }

  }

  handleClick(i) {
    this.setState({value: i})
  }


  render(){
   return(
      <div>
      <div className="projects container" id="projects">
        <Row>
        <Col lg={6} style={{marginTop:"300px", background:""}}>
        <div className="wrap">
          <div class="hexClass" style={{right:"6px", bottom:"56px"}}>
            <div class="hexagon hexagon2">
              <div class="hexagon-in1">
                <div class="hexagon-in-pep" onClick={() => this.handleClick(1)}>
                </div>
              </div>
             </div>
          </div>
          <div class="hexClass" style={{right:"70px", bottom:"135px"}}>
            <div class="hexagon hexagon2">
              <div class="hexagon-in1">
                <div class="hexagon-in2">
                </div>
              </div>
             </div>
          </div>
          <div class="hexClass" style={{right:"134px", bottom:"55px"}}>
            <div class="hexagon hexagon2">
              <div class="hexagon-in1">
                <div class="hexagon-in-nin" onClick={() => this.handleClick(3)}>
                </div>
              </div>
             </div>
          </div>
          <div class="hexClass" style={{right:"470px", top:"23px"}}>
            <div class="hexagon hexagon2">
              <div class="hexagon-in1">
                <div class="hexagon-in-prof" onClick={() => this.handleClick(4)}>
                </div>
              </div>
             </div>
          </div>
          <div class="hexClass" style={{right:"806px", top:"102px"}}>
            <div class="hexagon hexagon2">
              <div class="hexagon-in1">
                <div class="hexagon-in2">
                </div>
              </div>
             </div>
          </div>
          <div class="hexClass" style={{bottom:"55px", right:"-130px"}}>
            <div class="hexagon hexagon2">
              <div class="hexagon-in1">
                <div class="hexagon-in-vrtx" onClick={() => this.handleClick(6)}>
                </div>
              </div>
             </div>
          </div>
          <div class="hexClass" style={{bottom:"134px", right:"-67px"}}>
            <div class="hexagon hexagon2">
              <div class="hexagon-in1">
                <div class="hexagon-in2">
                </div>
              </div>
             </div>
          </div>
          </div>
          </Col>
          <Col style={{marginTop:"100px", marginLeft:"", textAlign:"center", background:""}}>
            {this.state.value === 0 ? <ValueZero/> :""}
            {this.state.value === 1 ? <ValueOne/> :""}
            {this.state.value === 3 ? <ValueThree/> :""}
            {this.state.value === 4 ? <ValueFour/> :""}
            {this.state.value === 5 ? <ValueThree/> :""}
            {this.state.value === 6 ? <ValueSix/> :""}

          </Col>
          </Row>
        </div>






      </div>
   )
  }
}
