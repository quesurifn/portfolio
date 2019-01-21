import React, { Component } from 'react';
import './App.css';

export class Contact extends Component {

    constructor() {
        super()

        this.state = {
            location: null
        }
    }

  componentDidMount() {
      document.querySelector('footer').style.display = 'none';


      axios.get('http://api.ipstack.com/check?access_key=b87455b25082384dd1160eab0c5ef2c1')
      .then((response) => {
        if(response.region_code) {
          this.setState({location: response.region_code})
        }
      })

  }
  render() {
    const {location} = this.state
    return (
      <div className="notfound">

        {location === "SC" || location === "NC" ? (

        <div>You are not authorized to visit this website.</div>

        ) : (
        <div>
         <h1>Contact Me</h1>

         <div className='contact-flex'>

            <div className='indiv gray'>
                <div className='bubble' onClick={() => window.location.href = 'tel:3127144944'}>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                </div>
                <p>312.714.4944</p>
            </div>


            <div className='indiv gray'>
                <div className='bubble' onClick={() => window.location.href = 'mailto:kyle.c.r.fahey@gmail.com'}>
                    <i className="fa fa-google" aria-hidden="true"></i>
                </div>
                <p>kyle.c.r.fahey</p>
            </div>


            <div className='indiv gray'>
                <div className='bubble' onClick={() => window.location.href = 'skype:kylecrfahey'}>
                    <i className="fa fa-skype" aria-hidden="true"></i>
                </div>
                <p>kylecrfahey</p>
            </div>

            </div>
         </div>

        )}

      </div>   
    );
  }
}