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



export default class ValueThree extends Component{
  constructor(props){
    super(props)
    }


  render(){
   return(
                  <div>
                  <div> <h2 style={{textAlign:"center"}}> Bargain Bot </h2> </div>
                  <div className="Photo">
                    <img src="bbot.png" style={{"height": "80%", "width": "78%", border:"3px solid aliceblue"}} alt="Image of Bargain Bot"/>
                  </div>
                  <Row style={{justifyContent:"center", marginTop:"5px"}}>
                  <div><Button variant="primary" size="sm">Ruby</Button>{' '}</div>
                  <div style={{marginLeft:"5px"}}><Button variant="info" size="sm" href="https://github.com/nnaiyer/BargainBot" target="_blank">
                    <IconContext.Provider value={{ style: {fontSize: '15px', marginTop:"-2px"}}}>
                      <GrGithub/> Repository
                    </IconContext.Provider>
                    </Button>{' '}</div>
                  </Row>
                  <div style={{textAlign:"left"}}> <br/> As evident from the image above, I love playing games on my Switch. I also love finding deals for my games. So I wrote a small bot that browses a few sites (mainly Reddit) and finds any deals for games that are on my wishlist. The bot is written in Ruby and it scrapes the web using Selenium. Although Selenium is overkill, it was really straightforward for such a simple use case so I ended up using it. The bot runs in scheduled intervals and emails me a list of any deals it finds. It's helped me get some good deals so far! </div>

              </div>
                  )
}
}
