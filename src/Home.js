import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import './css/gallery.css'

import {Link} from 'react-router-dom'
import {Header} from './Header'

import node from './images/nodejs-icon.svg'
import vue from './images/vue-9.svg'
import rails from './images/rails.svg'
import postgres from './images/postgresql.svg'
import react from './images/react.svg'
import redux from './images/redux.svg'
import router from './images/react-router.svg'
import live from './images/LIVE.png'
import websocket from './images/websocket.svg'
import jquery from './images/jquery-2.svg'
import js from './images/javascript.svg'

export class Home extends Component {
    constructor() {
      super() 
      
      this.domehaUpdate = this.domehaUpdate.bind(this)
      this.guardianUpdate = this.guardianUpdate.bind(this)
      this.trumpUpdate = this.trumpUpdate.bind(this)

      this.state = {
        domeha: '',
        guardian: '',
        trump: '',
        location: null
      }
    }
  
  componentDidMount() {
      document.querySelector('body').style.backgroundColor = '#15161a'
      document.querySelector('footer').style.display = 'block'

      axios.get('http://api.ipstack.com/check?access_key=b87455b25082384dd1160eab0c5ef2c1')
      .then((response) => {
        if(response.region_code) {
          this.setState({location: response.region_code})
        }
      })
  
  }


  domehaUpdate() {
    let time = this.refs.domeha.currentTime
    if (time < 13) {
      this.setState({domeha: 'A beautiful homepage with clever z-indexing'})
    } else if (time < 26 && time > 9){ 
      this.setState({domeha: 'Amazing blog complete with Discus, Recent Blog Posts, and related Blog Posts. \n Inspired by Trello...'})
    } else if (time > 26 && time < 36) {
      this.setState({domeha: 'A checkout dubbed by our customers, "The worlds easiest checkout"'})
    } else if (time > 36 && time < 61) {
      this.setState({domeha: 'Fully dynamic, created on the fly product pages... I <3 Node...'})
    }
  }

  guardianUpdate() {
    let time = this.refs.guardian.currentTime
    console.log(time)
    if (time < 5) {
      this.setState({guardian: 'Amazing design by @franchino'})
    } else if (time > 5 && time < 10) {
      this.setState({guardian: 'Embedded HTML5 Video'})
    } else if (time > 10 && time < 30) {
      this.setState({guardian: 'Beautiful photography that loads quickly thanks to React\'s Service Workers'})
    } else if (time > 30 && time < 44) {
      this.setState({guardian: 'Routed Slide Show all CSS no javascript'})
    }
  }

  trumpUpdate() {
    this.setState({trump: 'LIVE Trump Dashboard'})
  }
  

  render() {
    const {location} = this.state
    return (
      <div className="home">

      {location === "SC" || location === "NC" ? (

      <div>You are not authorized to visit this website.</div>

      ) : (
         <div className='container'>
             <div className='main'>
                <Header />
                <h3>Fall 2017</h3>
                <h4 style={{margin: '10px 0 40px 0'}}>React, Redux and an awesome UX</h4>
                <a href='http://getguardian.com'>getguardian.com</a>
                <div className='domeha'>
                  <div className="gallery items-3">
                    <div id="item-1" className="control-operator"></div>
                    <div id="item-2" className="control-operator"></div>
                    <div id="item-3" className="control-operator"></div>

                    <figure className="item">
                      <div className='overlay'>
                        <p>{this.state.guardian}</p>
                        <video autoPlay loop ref='guardian' onTimeUpdate={this.guardianUpdate}>
                          <source src='https://s3-us-west-2.amazonaws.com/quesoportfolio/guardian.mp4' type='video/mp4' /> 
                        </video>
                      </div>

                    </figure>

                    <figure className="item">
                      <h1>2</h1>
                    </figure>

                    <figure className="item">
                      <h1>3</h1>
                    </figure>

                    <div className="controls">
                      <a href="#item-1" className="control-button">•</a>
                    </div>
                  </div>

                </div>
                
                <div className='stack'>
                  <h2>THE STACK</h2>
                  <div className='stack-flex'>
                    <div className='indiv'>
                      <img src={node} alt='node' />
                      <p>Node.js</p>
                    </div>

                    <div className='indiv'>
                      <img src={react} alt='react' />
                      <p>React</p>
                    </div>
                    <div className='indiv'>
                      <img src={redux} alt='redux' />
                      <p>Redux</p>
                    </div>
                    <div className='indiv'>
                      <img src={router} alt='react-router' />
                      <p>React-Router v4</p>
                    </div>
                    
                  </div>
                </div>
                
                <div className='divider'></div>

                <h3>Spring 2017</h3>
                
                
                <h4 style={{margin: '10px 0 40px 0'}}>E-Commerce, Blog, Dynamic Page Creation, Google Analytics Heaven</h4>
                <a href='http://domeha.com'>domeha.com</a>
                <div className='domeha'>
                  <div className="gallery items-2">
                    <div id="item-1" className="control-operator"></div>
                    <div id="item-2" className="control-operator"></div>
                    <div id="item-3" className="control-operator"></div>

                    <figure className="item">
                      <div className='overlay'>
                        <p>{this.state.domeha}</p>
                        <video autoPlay loop onTimeUpdateCapture={this.domehaUpdate} ref='domeha'>
                          <source src='https://s3-us-west-2.amazonaws.com/quesoportfolio/combined.mp4' type='video/mp4' /> 
                        </video>
                      </div>

                    </figure>



                    <div className="controls">
                      <a href="#item-1" className="control-button">•</a>
                    </div>
                  </div>

                </div>
                <div className='stack'>
                  <h2>THE STACK</h2>
                  <div className='stack-flex'>
                    <div className='indiv'>
                      <img src={node} alt='node' />
                      <p>Node.js</p>
                    </div>

                    <div className='indiv'>
                      <img src={vue} alt='vue' />
                      <p>Vue.js</p>
                    </div>

                    <div className='indiv'>
                      <img src={rails} alt='rails' />
                      <p>Ruby on Rails</p>
                    </div>
                    <div className='indiv'>
                      <img src={postgres} alt='postgres' />
                      <p>PostgeSQL</p>
                    </div>
                  </div>
                </div>

                <div className='divider'></div>

                <h3>Summer 2017</h3>
                <h4 style={{margin: '10px 0 40px 0'}}><img src={live} alt='live' className='live' /> Trump Sentimenter</h4>

                <div className='domeha'>
                  <div className="gallery items-3">
                    <div id="item-1" className="control-operator"></div>
                    <div id="item-2" className="control-operator"></div>
                    <div id="item-3" className="control-operator"></div>

                    <figure className="item">
                      <div className='overlay'>
                        <p>{this.state.trump}</p>
                        <video autoPlay loop ref='trump' onTimeUpdate={this.trumpUpdate}>
                          <source src='https://s3-us-west-2.amazonaws.com/quesoportfolio/trump.mp4' type='video/mp4' /> 
                        </video>
                      </div>

                    </figure>

                    <figure className="item">
                      <h1>2</h1>
                    </figure>

                    <figure className="item">
                      <h1>3</h1>
                    </figure>

                    <div className="controls">
                      <a href="#item-1" className="control-button">•</a>
                      <a href="#item-2" className="control-button">•</a>
                      <a href="#item-3" className="control-button">•</a>
                    </div>
                  </div>

                </div>
                <div className='stack'>
                  <h2>THE STACK</h2>
                  <div className='stack-flex'>
                    <div className='indiv'>
                      <img src={node} alt='node' />
                      <p>Node.js</p>
                    </div>
                    <div className='indiv'>
                      <img src={react} alt='react' />
                      <p>React</p>
                    </div>
                    <div className='indiv'>
                      <img src={router} alt='react-router' />
                      <p>React-Router v3</p>
                    </div>
                    <div className='indiv'>
                      <img src={websocket} alt='react-router' />
                      <p>Websockets</p>
                    </div>
                    
                    
                  </div>
                </div>

                                <div className='divider'></div>

                <h3>Fall 2016</h3>

                <h4 style={{margin: '10px 0 40px 0'}}>Etch-A-Sketch</h4>

                <div className='domeha'>
                  <div className="gallery items-3">
                    <div id="item-1" className="control-operator"></div>
                    <div id="item-2" className="control-operator"></div>
                    <div id="item-3" className="control-operator"></div>

                    <figure className="item">
                      <div className='overlay'>
                        <p>Throwback</p>
                        <video autoPlay loop>
                          <source src='https://s3-us-west-2.amazonaws.com/quesoportfolio/Etch-A-Sketch.mp4' type='video/mp4' /> 
                        </video>
                      </div>

                    </figure>

                    <figure className="item">
                      <h1>2</h1>
                    </figure>

                    <figure className="item">
                      <h1>3</h1>
                    </figure>

                    <div className="controls">
                      <a href="#item-1" className="control-button">•</a>
                      <a href="#item-2" className="control-button">•</a>
                      <a href="#item-3" className="control-button">•</a>
                    </div>
                  </div>

                </div>
                <div className='stack'>
                  <h2>THE STACK</h2>
                  <div className='stack-flex'>
                    <div className='indiv'>
                      <img src={jquery} alt='jquery' />
                      <p>jQuery</p>
                    </div>
                    <div className='indiv'>
                      <img src={js} alt='js' />
                      <p>Javascript</p>
                    </div>
                 
                    
                    
                  </div>
                </div>



            </div>
         </div>
      )}
      </div>   
    );
  }
}