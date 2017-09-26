import React, { Component } from 'react';
import {Header} from './Header'
import './App.css';

export class Resume extends Component {
  componentDidMount() {
    document.querySelector('footer').style.display = 'block'
  }
  render() {
    return (
      <div className="resume">
        <div className='home'>
          <div className='container'>
            <div className='main'>
              <Header />



              <div className='content' >
                <h1>Summary</h1>
                <p>Insightful Web Developer with leadership abilities who loves programming Restful APIs in Node just as much as he loves writing React components. Experimentation and trying new languages are my passion.</p>   



                <h1>Experience</h1>

                <div className='exp'>
                  <div>
                    <h2 style={{margin: '0'}}>Dome Home Automation</h2>
                    <h3 style={{margin: '0'}}>Feb. 2017 - Present</h3>
                  </div>
                  <p>
                    Built a fully dynamic website managed a JSON API based CMS with Node.js, Vue.js, Express and EJS.
                    Integrated a Rails based e-commerce solution into the new website. The site has custom google analytics events throughout to ensure thorough reporting. I also created different tools per business needs including a node server that queried my Postgres database for recent orders then parsed into CSV and sent to operations daily by a certain time.
                  </p>

                  <ul>
                    <li>Received unsolicited praise for the new website from marketing directors and other executives within our industry</li>
                    <li>With the new website built, we were able to legitimize our brand image and immediately move into discussions with two major brands worth a total of over $50M</li>
                    <li>Achieved amazing, near perfect reliability and speed with node utilizing the Clustering API and PM2 by Kissmetrics</li>
                    <li>Built a best in class eCommerce checkout experience that has been dubbed by our customers as "The easiest checkout ever.</li>
                    <li>Built React / Redux and Node based website for our other brand and integrated into an existing e-commerce program.</li>
                  </ul>

                  
                </div>

                <div className='exp'>
                  <div>
                    <h2 style={{margin: '0'}}>Freelance Web Developer</h2>
                    <h3 style={{margin: '0'}}>2016 - Present</h3>
                  </div>
                  <p>
                    Built and consulted react applications for a small agency.
                  </p>

                </div>



                <h1>Side Projects</h1>

                <div className='exp'>
                  <div>
                    <h2 style={{margin: '0'}}>Trump Sentimenter</h2>
                    <h3 style={{margin: '0'}}>2017</h3>
                  </div>
                  <p>
                    Build a React application with Node, The Twitter API, Websockets, and data viz library Victory Charts 
                  </p>
                </div>


                <div className='exp'>
                  <div>
                    <h2 style={{margin: '0'}}>Etch-A-Sketch</h2>
                    <h3 style={{margin: '0'}}>2017</h3>
                  </div>
                  <p>
                    Build a fully functional Etch-A-Sketch using jQuery Event Handlers to every increasingly raise the opacity of a tile.
                  </p>
                </div>

                <div className='exp'>
                  <div>
                    <h2 style={{margin: '0'}}>Personaity Insights</h2>
                    <h3 style={{margin: '0'}}>2017</h3>
                  </div>
                  <p>
                    Integrated IBM's Watson API with Facebook's API to create a React application that visualizes your personalty traits. To ensure accuracy, I build a Chrome Extension to send off your google search history to a redis database where the session is stored and later combined with React's Waton API call and returned to a Redux Store.
                  </p>
                </div>

                <div className='exp'>
                  <div>
                    <h2 style={{margin: '0'}}>Tinder Bot</h2>
                    <h3 style={{margin: '0'}}>2017</h3>
                  </div>
                  <p>
                    Built a Python / Flask based Tinder client complete with automatic mode that will swipe right on everyone, and automatically start a conversation with new matches then email you any response.
                  </p>
              </div>


                <div className='exp'>
                  <div>
                    <h2 style={{margin: '0'}}>Twitter Sentimenter</h2>
                    <h3 style={{margin: '0'}}>2017</h3>
                  </div>
                  <p>
                    Built a Twitter Sentimenter in Node/Angular that parses a users tweets and returns their sentiment whether positive, neutral or negative.
                  </p>
              </div>


                <div className='exp'>
                  <div>
                    <h2 style={{margin: '0'}}>Random Quote Machine</h2>
                    <h3 style={{margin: '0'}}>2016</h3>
                  </div>
                  <p>
                    Utilized jQuery and an api to create a webpage that automatically generates a new quote and randomly changes the background color.
                  </p>
              </div>


                <div className='exp'>
                  <div>
                    <h2 style={{margin: '0'}}>Mean Bitly</h2>
                    <h3 style={{margin: '0'}}>2016</h3>
                  </div>
                  <p>
                    Concocted a Bit.ly clone with the MEAN stack.
                  </p>
              </div>

              <div className='exp'>
                  <div>
                    <h2 style={{margin: '0'}}>TimeStamp Microservice</h2>
                    <h3 style={{margin: '0'}}>2016</h3>
                  </div>
                  <p>
                    Got my hands dirty with node by building a simple restful api that parses timestamps.
                  </p>
              </div>

              <div className='exp'>
                  <div>
                    <h2 style={{margin: '0'}}>Image Search Microservice</h2>
                    <h3 style={{margin: '0'}}>2016</h3>
                  </div>
                  <p>
                    Built a small microservice in node that allows users to search for images with JSON as the medium.
                  </p>
              </div>

              <div className='exp'>
                  <div>
                    <h2 style={{margin: '0'}}>Knockout Coffee, Tacos or Pizza</h2>
                    <h3 style={{margin: '0'}}>2016</h3>
                  </div>
                  <p>
                    Took advantage of Google's maps API as well as Google's Places API and the Knockout.js framework to build a small application to show restaurants that are open now.
                  </p>
              </div>

               <div className='exp'>
                  <div>
                    <h2 style={{margin: '0'}}>MEAN Suggestion Box</h2>
                    <h3 style={{margin: '0'}}>2016</h3>
                  </div>
                  <p>
                    Build a small Hacker News clone using the MEAN stack.
                  </p>
              </div>


              <h1>Education</h1>

               <div className='exp'>
                  <div>
                    <h2 style={{margin: '0'}}>Apprenticeship</h2>
                    <h3 style={{margin: '0'}}>2017</h3>
                  </div>
                  <p>
                    Front-End Development apprenticeship with Franchino Pinto
                  </p>
              </div>

                <div className='exp'>
                  <div>
                    <h2 style={{margin: '0'}}>Free Code Camp</h2>
                    <h3 style={{margin: '0'}}>2017</h3>
                  </div>
                  <p>
                    Free Code Camp Curriculum
                  </p>
              </div>

              <div className='exp'>
                  <div>
                    <h2 style={{margin: '0'}}>Self Taught</h2>
                    <h3 style={{margin: '0'}}>2016 - Present</h3>
                  </div>
                  <p>
                    Self taught programmer with a knack for learning very quickly.
                  </p>
              </div>

          
            </div>
          </div>
        </div>
          <div className='divider'></div>


          <a onClick={() => window.open('https://s3-us-west-2.amazonaws.com/quesoportfolio/Resume.pdf', '_blank')} className='download-resume'>Download PDF</a>
      </div>


      </div>   
    );
  }
}