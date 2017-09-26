import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './App.css';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='footer-flex'>
            <div className='footer-button' onClick={() => window.open('http://linkedin.com/in/kylecrfahey', '_blank')}>
                <i className="fa fa-linkedin" aria-hidden="true"></i>
            </div>
            <div className='footer-button' onClick={() => window.open('http://github.com/quesurfin', '_blank')}>
                <i className="fa fa-github" aria-hidden="true"></i>
            </div>
            <div className='footer-button' onClick={() => window.open('http://instagram.com/kylecrfahey_', '_blank')}>
                <i className="fa fa-instagram" aria-hidden="true"></i>
            </div>
        </div>
        <small>&#169; Kyle C R Fahey. All Rights Reserved.</small>
        <small> Powered by React.</small>
    </footer>
    );
  }
}