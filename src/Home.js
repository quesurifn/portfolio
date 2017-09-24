import React, { Component } from 'react';
import './App.css';
import './css/gallery.css'

import {Link} from 'react-router-dom'

import node from './images/nodejs-icon.svg'
import vue from './images/vue-9.svg'
import rails from './images/rails.svg'
import postgres from './images/postgresql.svg'
import react from './images/react.svg'
import redux from './images/redux.svg'

export class Home extends Component {
    constructor() {
      super() 
      
      this.domehaUpdate = this.domehaUpdate.bind(this)
      this.guardianUpdate = this.guardianUpdate.bind(this)

      this.state = {
        domeha: '',
        guardian: ''
      }
    }
  
  componentDidMount() {
      document.querySelector('body').style.backgroundColor = '#15161a'
  }


  domehaUpdate() {
    let time = this.refs.domeha.currentTime
    console.log(time)
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

  }

  


  render() {
  
    return (
      <div className="home">
         <div className='container'>
             <div className='main'>
                <h1>Kyle C R Fahey</h1>
                <h2>Full-Stack Developer &amp; Growth Hacker</h2>
                <div className='links-box'>
                    <Link to='/'>Home</Link>
                    <Link to='/resume'>Résumé</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/contact'>Contact</Link>
                </div>


                <h3>September 2017</h3>
                <h4 style={{margin: '10px 0 40px 0'}}>React, Redux and an awesome UX</h4>

                <div className='domeha'>
                  <div className="gallery items-3">
                    <div id="item-1" className="control-operator"></div>
                    <div id="item-2" className="control-operator"></div>
                    <div id="item-3" className="control-operator"></div>

                    <figure className="item">
                      <div className='overlay'>
                        <p>{this.state.guardian}</p>
                        <video autoPlay loop onTimeUpdate={this.domehaUpdate} ref='domeha'>
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
                      <p>React.js</p>
                    </div>
                    <div className='indiv'>
                      <img src={redux} alt='react' />
                      <p>Redux.js</p>
                    </div>
                  </div>
                </div>
                
                <div className='divider'></div>

                <h3>MARCH 2017</h3>
                <h4 style={{margin: '10px 0 40px 0'}}>E-Commerce, Blog, Dynamic Page Creation, Google Analytics Heaven</h4>

                <div className='domeha'>
                  <div className="gallery items-3">
                    <div id="item-1" className="control-operator"></div>
                    <div id="item-2" className="control-operator"></div>
                    <div id="item-3" className="control-operator"></div>

                    <figure className="item">
                      <div className='overlay'>
                        <p>{this.state.domeha}</p>
                        <video autoPlay loop onTimeUpdate={this.domehaUpdate} ref='domeha'>
                          <source src='https://s3-us-west-2.amazonaws.com/quesoportfolio/combined.mp4' type='video/mp4' /> 
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
                

                

            </div>
         </div>
      </div>   
    );
  }
}